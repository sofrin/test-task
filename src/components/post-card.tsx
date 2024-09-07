import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatDate, pluralize } from '@/lib/utils';

type Props = {
	title: string;
	author: string;
	date: Date;
	rating: number;
	totalComments: number;
	url: string;
};

export default function PostCard({
	title,
	author,
	date,
	rating,
	totalComments,
	url,
}: Props) {
	const formattedDate = formatDate(date);
	return (
		<Card>
			<CardHeader className='p-3'>
				<CardTitle>
					{title}{' '}
					<span className='text-muted-foreground font-light text-sm'>
						({url.split('/')[2]})
					</span>
				</CardTitle>
				<CardDescription>
					{rating} points by {author} {formattedDate} |{' '}
					{pluralize(
						totalComments,
						'1 comment',
						`${totalComments} comments`,
						'No comments',
					)}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
