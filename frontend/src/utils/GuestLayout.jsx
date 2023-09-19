import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header'; 

function GuestLayout() {
    const { user } = useAuth();
	
	if (user) {
		return <Navigate to="/dashboard" />;
	}

  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default GuestLayout