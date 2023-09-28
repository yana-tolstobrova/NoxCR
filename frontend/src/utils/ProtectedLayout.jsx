import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NavBarMenu from '../components/NavBarMenu';



export default function DefaultLayout() {
	const { user } = useAuth();
	if (!user) {
		return <Navigate to="/login" />;
	}
	return (
		<>
			<NavBarMenu />
			<main>
                <Outlet />
			</main>
		</>
	);
}