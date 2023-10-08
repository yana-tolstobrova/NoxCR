import React,  { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useMyCart } from '../contexts/MyCartContext';
import { Header } from '../components/Header'; 

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