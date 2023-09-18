import React from 'react';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {
  const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password, cpassword } = e.target.elements;
		const body = {
			name: name.value,
			email: email.value,
			password: password.value,
			password_confirmation: cpassword.value,
		};
		try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				// return <Navigate to="/dashboard" />;
        navigate('/dashboard');
			}
		} catch (error) {
			if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
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
		}
	};
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <h1 className="text-5xl font-semibold"> Bienvenido !!! </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          {" "}
          Ingrese su información para poder registrarse.
        </p>
        <div className="mt-8">
          <form  onSubmit={handleSubmit} action="#" method="POST">
            <div>
              <label className="text-lg font-medium" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su nombre"
                name="name"
                type="text"
                id="name"
              />
               {nameError && <p>{nameError}</p>}
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="email">
                Correo
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su correo"
                name="email"
                type="email"
                id="email"
              />
               {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="password">
                Contraseña
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su contraseña"
                type="password"
                name="password"
                id="password"
              />
              {passwordError && <p className="text-sm text-red-600">{passwordError}</p>}
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="cpassword">
                Confirmar la contraseña
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingrese su contraseña"
                type="password"
                name="cpassword"
                id="cpassword"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hoover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
                type="submit"
              >
                Ingresar
              </button>
            </div>
            <a href="/login">Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
