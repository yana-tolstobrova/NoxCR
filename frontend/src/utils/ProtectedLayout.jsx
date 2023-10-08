import React,  { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Header } from '../components/Header'; 
import { useMyCart } from '../contexts/MyCartContext';
import axios from '../services/axios';

export default function DefaultLayout() {
	const { user, setUser } = useAuth();
	const { cartCount } = useMyCart();

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
			<Header />
			<main>
                <Outlet />
			</main>
		</>
	);
}