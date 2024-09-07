import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as homeLoader } from '@/routes/home.tsx';
import Post, { loader as postsLoader } from '@/routes/post.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,

		children: [
			{
				path: '/',
				element: <Home />,
				loader: homeLoader,
			},
			{
				path: '/posts/:postId',
				element: <Post />,
				loader: postsLoader,
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
