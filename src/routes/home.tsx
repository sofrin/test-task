import PostSkeleton from '@/components/post-skeleton';
import PostsList from '@/components/posts-list';
import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

export type Post = {
	id: number;
	title: string;
	by: string;
	time: number;
	score: number;
	descendants: number;
	url: string;
	type: string;
	kids: number[];
};
export async function loader() {
	const data = (await (
		await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
	).json()) as number[];
	const postsData = data.slice(0, 99).map(async (id: number) => {
		return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
			(res) => res.json(),
		);
	});
	const posts = Promise.all(postsData);
	return defer({ posts });
}
export default function Home() {
	const { posts } = useLoaderData() as { posts: Post[] };
	return (
		<div className='container mt-4'>
			<Suspense
				fallback={new Array(19).fill('_').map((_, i) => (
					<PostSkeleton key={i} />
				))}
			>
				<Await
					key='posts'
					errorElement={<p>Error</p>}
					resolve={posts}
				>
					<PostsList />
				</Await>
			</Suspense>
		</div>
	);
}
