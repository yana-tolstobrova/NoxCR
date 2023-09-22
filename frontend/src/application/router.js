import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';
import ProtectedLayout from '../utils/ProtectedLayout';
import GuestLayout from '../utils/GuestLayout';
import Register from '../pages/Register';
import ProductsPage from '../pages/ProductsPage';
import NaturalProductsPage from '../pages/NaturalProductsPage';
import CrazyProductsPage from '../pages/CrazyProductsPage';
import ScleraProductsPage from '../pages/ScleraProductsPage';
import ProductList from '../adminPages/AdminProducts';
import AdminLogin from '../components/AdminLogin';
import CreateProduct from '../components/CreateProduct';
import EditProduct from '../components/EditProduct';
import AdminPanel from '../adminPages/AdminPanel';
import DetailProduct from '../pages/DetailProduct';
import CartProducts from '../pages/CartProducts';
import AdminGuestLayout from '../utils/AdminGuestLayout';
import AdminProtectedLayout from '../utils/AdminProtectedLayout';

import SearchCard from '../pages/SearchCard';

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
				path: '/product/:id',
				element: <DetailProduct />,
			},
			{
				path: '/add-to-cart',
				element: <CartProducts />,
			},
			{
				path: '/products/natural',
				element: <NaturalProductsPage />,
			},
			{
				path: '/products/crazy',
				element: <CrazyProductsPage />,
			},
			{
				path: '/products/sclera',
				element: <ScleraProductsPage />,
			},
			{
				path: '/search',
				element: <SearchCard />,
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
				path: '/product/:id',
				element: <DetailProduct />,
			},
			{
				path: '/products/natural',
				element: <NaturalProductsPage />,
			},
			{
				path: '/products/crazy',
				element: <CrazyProductsPage />,
			},
			{
				path: '/products/sclera',
				element: <ScleraProductsPage />,
			},
		],
	},
	{
		path: '/',
		element: <AdminGuestLayout />,
		children: [
			{
				path: '/admin',
				element: <AdminLogin />,
			},
		],
	},
	{
		path: '/',
		element: <AdminProtectedLayout />,
		children: [
			{
				path: '/admin/adminPanel',
				element: <AdminPanel />,
			},
			{
				path: '/admin/products',
				element: <ProductList />,
			},
			{
				path: '/admin/createProduct',
				element: <CreateProduct />,
			},
			{
				path: '/admin/editProduct/:id',
				element: <EditProduct />,
			},
		],
	},
]);

export default router; 