import type { Comment } from '@/components/comment/comment-card';
import CommentCard from '@/components/comment/comment-card';
import { useAsyncValue } from 'react-router-dom';

export default function CommentList() {
	const comments = useAsyncValue() as Comment[];

	return (
		<>
			{comments?.map((comment) => (
				<CommentCard
					key={comment.id}
					{...comment}
				/>
			))}
		</>
	);
}
