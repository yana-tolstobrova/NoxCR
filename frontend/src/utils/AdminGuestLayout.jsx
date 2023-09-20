import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header'; 

function AdminGuestLayout() {
    const { user } = useAuth();
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default AdminGuestLayout