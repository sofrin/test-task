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
	time: number;
	rating: number;
	totalComments: number;
	url?: string;
	page?: boolean;
};

export default function PostCard({
	id,
	title,
	author,
	time,
	rating,
	totalComments,
	url,
	page,
}: Props) {
	const formattedDate = formatDate(new Date(time * 1000));

	return (
		<Card
			key={id}
			style={{ viewTransitionName: `${id}` }}
		>
			<CardHeader className='p-3'>
				<CardTitle>
					<AnimatedLink to={page ? `#` : `/posts/${id}`}>{title} </AnimatedLink>
					{url ? (
						!page ? (
							<span className='text-muted-foreground font-light text-sm'>
								({url?.split('/')[2]})
							</span>
						) : (
							<a href={`${url}`}>
								<p className='text-muted-foreground font-light text-sm'>
									{url}
								</p>
							</a>
						)
					) : null}
				</CardTitle>
				<CardDescription>
					{rating} points by {author}{' '}
					<span title={new Date(time * 1000).toISOString().split('T')[0]}>
						{formattedDate}
					</span>{' '}
					|{' '}
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
