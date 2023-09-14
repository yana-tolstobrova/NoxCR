import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Dashboard() {
	const { user } = useAuth();

	return (
		<>
            <NavBar />
				
		</>
	)
}