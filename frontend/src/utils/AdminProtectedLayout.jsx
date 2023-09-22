import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/LogoWhite.svg'
import CircleIcon from '../assets/circleIcon.svg'
import HomeIcon from '../assets/home.svg'
import ListIcon from '../assets/listIcon.svg'
import DollarIcon from '../assets/dollarIcon.svg'

export default function AdminProtectedLayout() {
	const { user, setUser } = useAuth();
	const navigate = useNavigate();
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
					navigate('/admin');
				}
			}
		})();
	}, []);

    const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				navigate('/admin');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
		
		<body className='flex h-full min-h-screen'>
			<div className='bg-purple w-[20%] text-white px-4'>
				<img src={Logo} alt='Logo Nox CR' className='w-3/4 pt-10 pl-2'></img>
				<nav>
					<ul className='pt-20 pb-44'>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={HomeIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/adminPanel'>Panel de Gestión</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={ListIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/'>Lista de usuarios</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={DollarIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/'>Transacciones</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={CircleIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/products'>Productos</a></li>
					</ul>
				</nav>
				<button onLogout={handleLogout} className="text-base bg-white text-black py-2 w-full hover:bg-black hover:text-white">Cerrar Sesión</button>
			</div>
			<main className='align-center w-[80%]'>
				<Outlet />
			</main>
		</body>
		</>
	);
}