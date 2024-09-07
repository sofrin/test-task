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
		<Card className='border-0 border-l-2 border-primary m-1 h-48'>
			<CardHeader className='h-full'>
				<CardTitle>
					<Skeleton className='w-1/12 h-full' />
				</CardTitle>
				<CardDescription>
					<Skeleton className='w-1/12 h-full' />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Skeleton className='w-1/5 h-full' />
			</CardContent>

			<CardFooter>
				<Skeleton className='w-1/12 h-full' />
			</CardFooter>
		</Card>
	);
}
