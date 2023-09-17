import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import ProtectedLayout from '../utils/ProtectedLayout';
import GuestLayout from '../utils/GuestLayout';
import Register from '../pages/Register';
import ProductsPage from '../pages/ProductsPage';
import NaturalProductsPage from '../pages/NaturalProductsPage';
import CrazzyProductsPage from '../pages/CrazzyProductsPage';
import EscleraProductsPage from '../pages/EscleraProductsPage';

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
			{
				path: '/products',
				element: <ProductsPage />,
			},
			{
				path: '/products/natural',
				element: <NaturalProductsPage />,
			},
			{
				path: '/products/crazzy',
				element: <CrazzyProductsPage />,
			},
			{
				path: '/products/esclera',
				element: <EscleraProductsPage />,
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
			{
				path: '/products',
				element: <ProductsPage />,
			},
			{
				path: '/products/natural',
				element: <NaturalProductsPage />,
			},
			{
				path: '/products/crazzy',
				element: <CrazzyProductsPage />,
			},
			{
				path: '/products/esclera',
				element: <EscleraProductsPage />,
			},
		],
	},
]);

export default router; 