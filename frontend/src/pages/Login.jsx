import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);
  const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
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
				navigate('/');
			}
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
      if (error.response.data.errors.email) {
        setEmailError(error.response.data.errors.email[0]);
      } else {
        setEmailError('');
      }
      if (error.response.data.errors.password) {
        setPasswordError(error.response.data.errors.password[0]);
      } else {
        setPasswordError('');
      }

		}
	};
  return (
    <>
        <div className="flex items-start justify-center mb-8">
          <div className="bg-white px-8 py-8 border-2 border-gray-100">
            <h1 className="text-3xl text-center font-semibold md:text-5xl"style={{ color: "#3C2046" }}>Accede a Nox CR</h1>
            <p className="font-medium text-lg text-gray-500 mt-2">
              {" "}
              Por favor ingrese sus datos
            </p>
            <div>{error}</div>
            <div className="mt-8">
              <form onSubmit={handleSubmit} method="POST" action="#">
                <div className='mt-4'>
                  <label className="text-lg font-medium" htmlFor="email">
                    Correo
                  </label>
                  <input
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                    placeholder="Ingrese su correo"
                    type="email"
                    name="email"
                    id="email"
                  />
                  {emailError && <p className="text-sm text-red-600">{emailError}</p>}
                </div>
                <div className='mt-4'>
                  <label className="text-lg font-medium" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                    placeholder="Ingrese su contraseña"
                    type="password"
                    name="password"
                    ide="password"
                  />
                  {passwordError && <p className="text-sm text-red-600">{passwordError}</p>}
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
                    type="submit"
                  >
                   Iniciar sesión
                  </button>
                </div>
                <div className='mt-4 flex items-center justify-center'>
                  <p className='text-lg md:text-xl font-medium'>¿Eres nuevo?</p>
                  <a  className='ml-4 hover:font-semibold hover:underline text-lg md:text-xl' href="/register"style={{ color: '#55285A' }}>Registrate</a>
                </div>
              </form>

            </div>
          </div>
        </div>
       
    </>
    
    
  );
}

export default Login;
