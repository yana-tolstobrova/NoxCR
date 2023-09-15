import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar'; 

function GuestLayout() {
    const { user } = useAuth();
	
	if (user) {
		return <Navigate to="/dashboard" />;
	}

  return (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default GuestLayout