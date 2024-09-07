import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
