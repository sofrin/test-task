import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatDate, pluralize } from '@/lib/utils';
import { useState } from 'react';

type Props = {
	by: string;
	id: number;
	kidsIds: number[];
	text: string;
	time: Date;
};
export default function CommentCard({ by, id, kidsIds, text, time }: Props) {
	const formattedDate = formatDate(time);
	const [showReplies, setShowReplies] = useState(false);
	return (
		<Card
			className=' border-0 border-l-2  border-primary  m-1'
			key={id}
		>
			<CardHeader>
				<CardTitle>{by}</CardTitle>
				<CardDescription>{formattedDate}</CardDescription>
			</CardHeader>
			<CardContent>{text}</CardContent>
			{kidsIds.length > 0 && (
				<CardFooter>
					<Button onClick={() => setShowReplies(!showReplies)}>
						{!showReplies
							? `Load ${kidsIds.length} ${pluralize(
									kidsIds.length,
									'reply',
									'replies',
							  )}`
							: 'Hide Replies'}
					</Button>
				</CardFooter>
			)}
			{showReplies && (
				<div className='ml-4'>
					{kidsIds.map((id) => (
						<CommentCard
							key={id}
							by='username'
							id={id}
							kidsIds={[1, 2]}
							text='comment text'
							time={new Date()}
						/>
					))}
				</div>
			)}
		</Card>
	);
}
