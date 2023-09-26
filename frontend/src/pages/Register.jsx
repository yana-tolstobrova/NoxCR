import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ModalSuccess';

function Register() {
  const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/');
  };

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
        openModal();
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
    <div className="flex items-start justify-center h-screen">
      <div className="bg-white px-10 py-10 border-2 border-gray-100">
        <h1 className="text-3xl font-semibold" style={{ color: "#3C2046" }}>Crea tu cuenta</h1>
        <p className="font-medium text-lg text-gray-500 mt-2">
          {" "}
          Ingrese su información para poder registrarse.
        </p>
        <div className="mt-8">
          <form  onSubmit={handleSubmit} action="#" method="POST">
            <div className='mt-4'>
              <label className="text-lg font-medium" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                placeholder="Ingrese su nombre"
                name="name"
                type="text"
                id="name"
              />
               {nameError && <p className="text-sm text-red-600">{nameError}</p>}
            </div>
            <div className='mt-4'>
              <label className="text-lg font-medium" htmlFor="email">
                Correo
              </label>
              <input
                className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                placeholder="Ingrese su correo"
                name="email"
                type="email"
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
                id="password"
              />
              {passwordError && <p className="text-sm text-red-600">{passwordError}</p>}
            </div>
            <div className='mt-4'>
              <label className="text-lg font-medium" htmlFor="cpassword">
                Confirmar la contraseña
              </label>
              <input
                className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                placeholder="Ingrese su contraseña"
                type="password"
                name="cpassword"
                id="cpassword"
              />
              {passwordError && <p className="text-sm text-red-600">{passwordError}</p>}
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
                type="submit" 
              >
                Crear cuenta
              </button>
            </div>
            <div className='mt-4 flex items-center justify-center'>
              <p className='text-lg font-medium'>¿Ya tienes cuenta?</p>
              <a  className='ml-4  hover:font-semibold hover:underline' href="/login"style={{ color: '#55285A' }}>Iniciar sesión</a>
            </div>
          </form>
        </div>
      </div>
      <Modal showModal={showModal} text='Aceptar' title='Usuario creado exitosamente' handleCloseModal={closeModal} />
    </div>
  );
}

export default Register;
