import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/LogoWhite.svg'
import CircleIcon from '../assets/circleIcon.svg'
import HomeIcon from '../assets/home.svg'
import ListIcon from '../assets/listIcon.svg'
import DollarIcon from '../assets/dollarIcon.svg'
import { updateUserDetails } from '../services/ApiUsers';

export default function AdminProtectedLayout() {
	const { user, setUser, hasRole } = useAuth();
	const [editMode, setEditMode] = useState(false);
    const [editedEmail, setEditedEmail] = useState(user.email);
    const [editedPassword, setEditedPassword] = useState("");
	const [showUserData, setShowUserData] = useState(false);
	const navigate = useNavigate();

	 if (!user || !hasRole('Admin')) {
	 	return <Navigate to="/admin" />;
	 }
	 const toggleUserData = () => {
        setShowUserData(!showUserData);
    };
	const closeUserData = () => {
        setShowUserData(false);
    };
	 const handleSave = async () => {
		try {
			const updatedData = {
				email: editedEmail,
				password: editedPassword,
			};
			await updateUserDetails(user.id, updatedData);
			setUser({ ...user, email: editedEmail });
	  
			setEditMode(false);
		} catch (error) {
			console.error('Error updating user details:', error);
		}
	  };
	  
	  const handleCancel = () => {
		setEditMode(false);
	  };
	  
	  const handleEditClick = () => {
		setEditedEmail(user.email);
		setEditedPassword("");
		setEditMode(true);
	  };
	  
	  const renderEmailField = () => {
		if (editMode) {
			return (
			  <div className='mt-2'><input
					type="email"
					className='border border-black p-1 text-black w-full'
					value={editedEmail}
					onChange={(e) => setEditedEmail(e.target.value)}
					/></div>
			);
		} else {
			return <p className='py-2 text-sm'>{user.email}</p>;
		}
	  };
	  
	  const renderPasswordField = () => {
		if (editMode) {
			return (
				<div className='mt-2'><input
					type="password"
					placeholder='********'
					className='border border-black p-1 text-black w-full'
					value={editedPassword}
					onChange={(e) => setEditedPassword(e.target.value)}
				/></div>
			);
		} else {
			return <p className='py-2 text-sm'>*********</p>;
		}
	  };
    const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				navigate('/admin');
				console.log(resp.data)
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
		
		<div className='flex h-full min-h-screen'>
			<div className='bg-purple w-[20%] text-white px-4'>
				<img src={Logo} alt='Logo Nox CR' className='w-3/4 pt-10 pl-2'></img>
				<nav>
					<ul className='pt-20 '>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={HomeIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/adminPanel'>Panel de Gestión</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={ListIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/adminUsers'>Lista de usuarios</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={DollarIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/adminOrders'>Transacciones</a></li>
						<li className='flex gap-4 justify-start pb-8 hover:text-color-icon'><img src={CircleIcon} alt='icono de casa' className='pl-5'></img><a href='/admin/products'>Productos</a></li>
					</ul>
				</nav>
				<div className='fixed bottom-2 w-[20%] left-0 p-4'>
                <div>
                    <button onClick={toggleUserData} className={`hover:bg-white text-white border-1 border-white border py-2 mt-2 w-full hover:text-black ${!showUserData ? '' : 'hidden'}`}>Mis Datos</button>
                    {showUserData && (
                        <button onClick={closeUserData} className="text-sm text-white text-center float-right">
							<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
                    )}
                    <div className={`mt-2 ${showUserData ? '' : 'hidden'}`}>
                        <div>
                            <p className='font-bold'>Correo electrónico</p>
                            {renderEmailField()}
                        </div>
                        <div>
                            <p className='font-bold mt-2'>Contraseña</p>
                            {renderPasswordField()}
                        </div>
                        <div className='mb-2'>
                            {editMode ? (
                                <div className='w-full flex gap-4'>
                                    <button onClick={handleSave} className="text-sm hover:underline py-2 text-white text-center">Guardar</button>
                                    <button onClick={handleCancel} className="text-sm hover:underline py-2 text-white text-center">Cancelar</button>
                                </div>
                            ) : (
                                <div className='w-full'>
                                    <button onClick={handleEditClick} className="text-sm hover:underline py-2 text-white text-center">Modificar</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={handleLogout} className="bg-white text-black py-2 mt-2 w-full hover:bg-black hover:text-white">Cerrar Sesión</button>
            </div>
			</div>
			<main className='align-center w-[80%]'>
				<Outlet />
			</main>
		</div>
		</>
	);
}