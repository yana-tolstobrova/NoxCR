import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 

export default function AdminPanel() {
	const { user } = useAuth();

	return (
		<>
				Admin Dashboard
		</>
	)
}