import PostCard from '@/components/post-card';
import CommentCard from '../components/comment-card';

export default function Post() {
	return (
		<div className='container mt-4'>
			<div className=' mb-4'>
				<PostCard
					id={1123}
					totalComments={120}
					title='title123'
					author='author'
					date={new Date()}
					rating={10}
					url='https://example.com/url'
					page
				/>
			</div>
			<div>
				<CommentCard
					by='by'
					id={1}
					kidsIds={[1, 2, 3, 4, 5, 6]}
					text='text'
					time={new Date()}
				></CommentCard>
			</div>
		</div>
	);
}
