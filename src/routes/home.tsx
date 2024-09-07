import PostCard from '@/components/post-card';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

export default function Home() {
	return (
		<div className='container mt-4'>
			<div className='flex flex-row align-middle items-center justify-between mb-4'>
				<h1 className='text-3xl  text-foreground   font-bold text-center  rounded-lg '>
					Hacher News{' '}
				</h1>
				<Button
					title='Refresh'
					size='icon'
					variant='outline'
					className='group'
				>
					<RefreshCcw className='h-4 w-4 group-hover:animate-spin' />
				</Button>
			</div>

			<PostCard
				totalComments={120}
				title='title'
				author='author'
				date={new Date()}
				rating={10}
				url='https://example.com/url'
			/>
		</div>
	);
}
