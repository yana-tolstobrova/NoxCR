import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header'; 

export default function DefaultLayout() {
	const { user, hasRole } = useAuth();
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