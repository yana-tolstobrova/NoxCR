import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar';

export default function AdminProtectedLayout() {
	const { user, setUser } = useAuth();
    
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, []);

	if (!user) {
		return <Navigate to="/admin" />;
	}
    const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/admin';
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
		<button onLogout={handleLogout}/>
			<main>
                <Outlet />
			</main>
		</>
	);
}