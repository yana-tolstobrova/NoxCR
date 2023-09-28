import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar';
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
    const handleLogout = async () => {
		try {
			console.log('Iniciando cierre de sesión...');
			const resp = await axios.post('/logout');
			console.log('Respuesta del servidor:', resp);
			if (resp.status === 200) {
				console.log('Cierre de sesión exitoso');
				localStorage.removeItem('authToken');
				localStorage.removeItem('user');
				setUser(null);
				window.location.href = '/';
			}
		} catch (error) {
			console.error('Error al cerrar sesión:', error);
		}
	};

	return (
		<>
		<NavBarMenu onClick={handleLogout}/>
			<main>
                <Outlet />
			</main>
		</>
	);
}