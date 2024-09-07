import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CommentSkeleton() {
	return (
		<Card className='border-0 border-l-2 border-primary m-1'>
			<CardHeader>
				<CardTitle>
					<Skeleton className='w-1/2' />
				</CardTitle>
				<CardDescription>
					<Skeleton className='w-1/2' />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Skeleton className='w-1/2' />
			</CardContent>

			<CardFooter>
				<Skeleton className='w-1/2' />
			</CardFooter>
		</Card>
	);
}
