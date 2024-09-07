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
					kids={[11123]}
					text='text'
					time={new Date().getTime()}
				></CommentCard>
			</div>
		</div>
	);
}
