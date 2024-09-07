import { AnimatedLink } from '@/components/animated-link';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatDate, pluralize } from '@/lib/utils';

type Props = {
	id: number;
	title: string;
	author: string;
	date: Date;
	rating: number;
	totalComments: number;
	url: string;
	page?: boolean;
};

export default function PostCard({
	id,
	title,
	author,
	date,
	rating,
	totalComments,
	url,
	page,
}: Props) {
	const formattedDate = formatDate(date);
	console.log(`id`, id);

	return (
		<Card>
			<CardHeader className='p-3'>
				<CardTitle>
					<AnimatedLink to={page ? `#` : `/posts/${id}`}>{title} </AnimatedLink>
					{!page ? (
						<span className='text-muted-foreground font-light text-sm'>
							({url.split('/')[2]})
						</span>
					) : (
						<a href={`${url}`}>
							<p className='text-muted-foreground font-light text-sm'>{url}</p>
						</a>
					)}
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
