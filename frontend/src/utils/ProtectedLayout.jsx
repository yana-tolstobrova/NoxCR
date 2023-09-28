import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import NavBarMenu from '../components/NavBarMenu';



export default function DefaultLayout() {
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