import { Home, loader as homeLoader } from '@/routes/home.tsx';
import { Post, loader as postsLoader } from '@/routes/post.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,

		children: [
			{
				path: '/',
				element: <Home />,
				loader: homeLoader,
				lazy: () => {
					return import('./routes/home.tsx');
				},
			},
			{
				path: '/posts/:postId',
				element: <Post />,
				loader: postsLoader,
				lazy: () => {
					return import('./routes/post.tsx');
				},
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
