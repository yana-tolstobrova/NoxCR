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
import ProductList from '../adminPages/Products';
import Admin from '../adminPages/AdminPage';
import CreateProduct from '../adminPages/CreateProduct';
import EditProduct from '../adminPages/EditProduct';
import AdminPanel from '../adminPages/AdminPanel';
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
				path: '/admin',
				element: <Admin />,
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