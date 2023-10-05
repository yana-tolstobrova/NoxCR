import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MyCartProvider } from './contexts/MyCartContext';
import router from './application/router.js';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<MyCartProvider>
				<RouterProvider router={router} />
			</MyCartProvider>
		</AuthProvider>
	</React.StrictMode>
);


