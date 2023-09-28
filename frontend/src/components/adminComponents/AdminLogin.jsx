import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../../services/axios';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
  const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);
  const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		await csrfToken();
		try {
			const resp = await axios.post('/login', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				navigate('/admin/adminPanel');
			}
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white px-10 py-10">
            <h1 className="text-5xl font-semibold text-purple">Accede a Nox CR</h1>
            <div className="mt-8">
              <form onSubmit={handleSubmit} method="POST" action="#">
                <div>
                  <label className="text-lg font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-300 bg-white p-3 mt-1 focus:border-black focus:outline-none"
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                    placeholder="Contraseña"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
                    type="submit"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
    </>
  );
}

export default AdminLogin;
