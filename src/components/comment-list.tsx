import type { Comment } from '@/components/comment-card';
import CommentCard from '@/components/comment-card';
import { useAsyncValue } from 'react-router-dom';

export default function CommentList() {
	const comments = useAsyncValue() as Comment[];
	console.log(`comments`, comments);

	return (
		<>
			{comments?.map((comment) => (
				<CommentCard {...comment} />
			))}
		</>
	);
}
