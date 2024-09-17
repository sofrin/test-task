import PostCard from '@/components/post/post-card';
import { type Comment } from '../components/comment/comment-card';
import { defer, useLoaderData, Await } from 'react-router-dom';
import type { Post } from '@/routes/home';
import { Suspense } from 'react';
import PostSkeleton from '@/components/post/post-skeleton';
import CommentSkeleton from '@/components/comment/comment-skeleton';
import CommentList from '@/components/comment/comment-list';
import { useLivePageData } from '@/lib/utils';
/// @ts-expect-error idk why typing params throws error in main
export async function loader({ params }) {
	const data = fetch(
		`https://hacker-news.firebaseio.com/v0/item/${params.postId}.json`,
	).then((res) => res.json() as Promise<Post>);

	const comments = data.then((res) =>
		Promise.all(
			res.kids.map(async (id) => {
				return fetch(
					`https://hacker-news.firebaseio.com/v0/item/${id}.json`,
				).then((res) => res.json() as Promise<Comment>);
			}),
		),
	);
	// const commentsData = (await data)?.kids?.map(async (id) => {
	// 	return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
	// 		.then((res) => res.json() as Promise<Comment>)
	// 		.catch((err) => console.log(err));
	// });
	// if (!commentsData) return defer({ data, comments: [] });
	// const comments = Promise.all(commentsData).catch((err) => console.log(err));
	return defer({ data, comments });
}

export default function Post() {
	useLivePageData();
	const { data, comments } = useLoaderData() as {
		data: Post;
		comments: Comment[];
	};
	return (
		<div className='container mt-4'>
			<div className=' mb-4'>
				<Suspense fallback={<PostSkeleton />}>
					<Await resolve={data}>
						{(data: Post) => (
							<PostCard
								id={data.id}
								totalComments={data.descendants}
								title={data.title}
								author={data.by}
								time={data.time}
								rating={data.score}
								url={data?.url}
								page
							/>
						)}
					</Await>
				</Suspense>
			</div>
			<div>
				<h1 className='mb-2 text-xl '>Comments</h1>
				<Suspense fallback={<CommentSkeleton />}>
					<Await resolve={comments}>
						<CommentList />
					</Await>
				</Suspense>
			</div>
		</div>
	);
}
