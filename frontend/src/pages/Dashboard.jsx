import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function Dashboard() {
	const { user } = useAuth();

	return (
		<>
           <Card />
				
		</>
	)
}