import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';

import RootLayout from './layouts/RootLayout';
import Home from './routes/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'create',
				element: <h1>Create a Knight!</h1>,
			},
			{
				path: 'gallery',
				element: <h1>Knights Gallery</h1>,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
