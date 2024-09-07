import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/routes/home.tsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
