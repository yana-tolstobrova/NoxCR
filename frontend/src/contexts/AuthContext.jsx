import { createContext, useContext, useState } from 'react';
import axios from '../services/axios';
const AuthContent = createContext({
	user: null,
	setUser: () => {},
	csrfToken: () => {},
	can: () => false,
    hasRole: () => false,
});

export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	
	const setUser = (user) => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};

	const can = (permission) => {
        return (user?.permissions || []).includes(permission);
    };

    const hasRole = (role) => {
        return (user?.roles || []).includes(role);
    };

	const csrfToken = async () => {
		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		return true;
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken, can, hasRole }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};
