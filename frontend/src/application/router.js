import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import ProtectedLayout from '../utils/ProtectedLayout';
import GuestLayout from '../utils/GuestLayout';
import Register from '../pages/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
            {
				path: '/register',
				element: <Register />,
			},
            {
				path: '/login',
				element: <Login />,
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