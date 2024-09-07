import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function PostSkeleton() {
	return (
		<Card className='w-full h-20'>
			<CardHeader className='p-3 w-full h-full'>
				<CardTitle className='w-full h-full flex flex-row'>
					<Skeleton className='w-1/4 h-full'></Skeleton>
					<Skeleton className='w-1/12 h-full'></Skeleton>
				</CardTitle>
				<CardDescription className='w-full h-full flex flex-row'>
					<Skeleton className='w-1/6 h-full'></Skeleton>
					{'|'}
					<Skeleton className='w-1/12 h-full'></Skeleton>
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
