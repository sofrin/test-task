import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type Props = {
	title: string;
	author: string;
	date: Date;
	rating: number;
	totalComments: number;
	url: string;
};
const time = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const pluralize = (
	count: number,
	singular: string,
	plural: string,
	zero: string,
) => (count === 0 ? zero : count === 1 ? singular : plural);

export default function PostCard({
	title,
	author,
	date,
	rating,
	totalComments,
	url,
}: Props) {
	const formattedDate = time.format(
		-1 * Math.round((Date.now() - date.getTime()) / 86400000),
		'day',
	);
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
