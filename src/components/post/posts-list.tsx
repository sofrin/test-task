import PostCard from '@/components/post/post-card';
import type { Post } from '@/routes/home';
import { useAsyncValue } from 'react-router-dom';

export default function PostsList() {
	const posts = useAsyncValue() as Post[];
	console.log(`posts`, posts);

	return (
		<>
			{posts?.map((post) => (
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
