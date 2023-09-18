import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 

export default function Admin() {
	const { user } = useAuth();

	return (
		<>
				Admin panel
		</>
	)
}