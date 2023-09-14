import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import ProtectedLayout from '../utils/ProtectedLayout';
import GuestLayout from '../utils/GuestLayout';


const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
]);

export default router; 