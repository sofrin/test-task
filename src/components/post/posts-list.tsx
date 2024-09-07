import PostCard from '@/components/post/post-card';
import type { Post } from '@/routes/home';
import { useMemo } from 'react';
import { useAsyncValue } from 'react-router-dom';

export default function PostsList() {
	const posts = useAsyncValue() as Post[];
	const sortedPosts = useMemo(
		() => posts.sort((a, b) => b.time - a.time),
		[posts],
	);

	return (
		<>
			{sortedPosts?.map((post) => (
				<PostCard
					key={post.id}
					id={post.id}
					totalComments={post.descendants}
					title={post.title}
					author={post.by}
					time={post.time}
					rating={post.score}
					url={post.url}
				/>
			))}
		</>
	);
}
