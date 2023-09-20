import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import AdminLogin from '../components/AdminLogin';

export default function Admin() {
	const { user } = useAuth();

	return (
		<>
				<AdminLogin />
			
		</>
	)
}