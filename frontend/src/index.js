import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import router from './application/router.js';
import NavBarMenu from './components/NavBarMenu';
import axios from 'axios'


const handleLogout = async () => {
	try {
		const resp = await axios.post('/logout');
		if (resp.status === 200) {
			localStorage.removeItem('user');
			window.location.href = '/';
		}
	} catch (error) {
		console.log(error);
	}
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
				<RouterProvider router={router} />
				<NavBarMenu onLogout={handleLogout} />
		</AuthProvider>
	</React.StrictMode>
);


