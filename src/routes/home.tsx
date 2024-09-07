import PostSkeleton from '@/components/post/post-skeleton';
import PostsList from '@/components/post/posts-list';
import { useLivePageData } from '@/lib/utils';
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
	const data = await (
		await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
	).json();
	const postsData = data.slice(0, 19).map(async (id: number) => {
		return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
			(res) => res.json().catch((err) => console.log(err)),
		);
	});
	const postsData1 = data.slice(20, 99).map(async (id: number) => {
		return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
			(res) => res.json().catch((err) => console.log(err)),
		);
	});

	const posts = await Promise.all(postsData).catch((err) => console.log(err));
	const posts1 = Promise.all(postsData1).catch((err) => console.log(err));
	return defer({ posts, posts1 });
}
export default function Home() {
	useLivePageData();
	const { posts, posts1 } = useLoaderData() as {
		posts: Post[];
		posts1: Post[];
	};
	return (
		<div className='container mt-4'>
			<Suspense
				fallback={new Array(20).fill('_').map((_, i) => (
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
			<Suspense
				fallback={new Array(20).fill('_').map((_, i) => (
					<PostSkeleton key={i} />
				))}
			>
				<Await
					key='posts1'
					errorElement={<p>Error</p>}
					resolve={posts1}
				>
					<PostsList />
				</Await>
			</Suspense>
		</div>
	);
}
