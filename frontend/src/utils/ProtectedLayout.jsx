import React,  { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header'; 
import { useMyCart } from '../contexts/MyCartContext';

export default function DefaultLayout() {
	const { user, hasRole } = useAuth();
	const { cartCount } = useMyCart();

	if (!user || !hasRole('User')) {
		return <Navigate to="/login" />;
	}
	return (
		<>
			<Header />
			<main>
                <Outlet />
			</main>
		</>
	);
}