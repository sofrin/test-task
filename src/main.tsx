import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/routes/home.tsx';
import Post from '@/routes/post.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/posts/:id',
				element: <Post />,
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
