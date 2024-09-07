import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CommentSkeleton() {
	return (
		<Card className='border-0 border-l-2 border-primary m-1 h-48 w-full'>
			<CardHeader className=' w-full'>
				<CardTitle className='w-full  '>
					<Skeleton className='w-1/12 h-6' />
				</CardTitle>
				<div className='w-1/2'>
					<Skeleton className='w-1/12  h-4' />
				</div>
			</CardHeader>
			<CardContent className=' w-full'>
				<Skeleton className='w-1/2 h-12' />
			</CardContent>

			<CardFooter className=' w-full'>
				<Skeleton className='w-1/12 h-4' />
			</CardFooter>
		</Card>
	);
}
