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
	kids: number[];
	text: string;
	time: number;
};
export default function CommentCard({
	by,
	id,
	kids: kidsIds,
	text,
	time,
}: Props) {
	const formattedDate = formatDate(new Date(time * 1000));
	const [showReplies, setShowReplies] = useState(false);
	const [kidsData, setKidsData] = useState<Props[]>([]);
	const [loading, setLoading] = useState(false);
	const handleLoadReplies = async () => {
		if (showReplies) return setShowReplies(false);
		try {
			setLoading(true);
			const data = await Promise.all(
				kidsIds.map((id) =>
					fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`),
				),
			);
			const results = await Promise.all(data.map((res) => res.json()));
			// TODO: validate results
			setKidsData(results);
			setShowReplies(true);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<Card
			className='border-0 border-l-2 border-primary m-1'
			key={id}
		>
			<CardHeader>
				<CardTitle>{by}</CardTitle>
				<CardDescription>{formattedDate}</CardDescription>
			</CardHeader>
			<CardContent>{text}</CardContent>
			{kidsIds && kidsIds.length > 0 && (
				<CardFooter>
					<Button onClick={handleLoadReplies}>
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
			{loading && <div className='ml-4'>Loading...</div>}
			{showReplies && loading === false && (
				<div className='ml-4'>
					{kidsData.map((kid) => {
						console.log(`kid:`, kid);

						return (
							<CommentCard
								key={kid.id}
								by={kid.by}
								id={kid.id}
								kids={kid.kids}
								text={kid.text}
								time={kid.time}
							/>
						);
					})}
				</div>
			)}
		</Card>
	);
}
