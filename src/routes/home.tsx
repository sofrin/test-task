import PostCard from '@/components/post-card';
export default function Home() {
	return (
		<div className='container mt-4'>
			<PostCard
				id={1123}
				totalComments={120}
				title='title123'
				author='author'
				date={new Date()}
				rating={10}
				url='https://example.com/url'
			/>
		</div>
	);
}
