import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import AdminLogin from '../components/AdminLogin';
import Logo from '../assets/LogoWhite.svg'
export default function Admin() {
	const { user } = useAuth();

	return (
		<div className='flex'>
			<div className='bg-purple h-screen w-1/4'>
				<img src={Logo} alt='Logo Nox CR' className='w-3/4 pt-10 pl-5'></img>
			</div>
			<div className='align-center w-3/4'>
				<AdminLogin />
			</div>
		</div>
	)
}