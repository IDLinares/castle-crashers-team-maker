import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';

import RootLayout from './layouts/RootLayout';
import Home from './routes/Home';
import CreateKnight from './routes/CreateKnight';
import KnightsGallery from './routes/KnightsGallery';
import EditKnight from './routes/EditKnight';

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
				element: <CreateKnight />,
			},
			{
				path: 'gallery',
				element: <KnightsGallery />,
			},
			{
				path: 'edit/:id',
				element: <EditKnight />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
