import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
	const { user } = useAuth();

	return (
		<>
            <NavBar />
				
		</>
	)
}