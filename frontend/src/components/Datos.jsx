import React, { useState, useEffect } from 'react';
import {  getUserDetails, deleteUser } from '../services/ApiUsers';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';
import Modal from '../components/ModalSuccess';
import warning from '../assets/warning.svg';

function Datos() {
    const [userDetails, setUserDetails] = useState([]);
    const { user, setUser, hasRole } = useAuth();

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(true);
  };

  const closeModal = () => {
      setShowModal(false);
  };
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              getUserDetails()
              .then((userDetailsData) => {
                setUserDetails(userDetailsData);
              })
            } catch (error) {
              console.error('Error fetching user details:', error);
            }
          };
      
          fetchUserDetails();

},[])

const handleDelete = () => {
  deleteUser(user.id)
    .then((success) => {
      if (success) {
        closeModal();
        setUser(null);
      } else {
        console.error('Failed to delete product.');
      }
    })
    .catch((error) => {
      console.error('Error deleting product:', error);
    });
};

  return (
    <div className='flex justify-center mt-8'>
    <div className='flex-row content-center'>
    <div className='flex-row justify-center ml-10'>
        <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada</p>
    </div>
    <div className='flex mt-8 justify-between'>
    <div className='pt-3'>
        <h2 className='text-violet-900 mb-2 font-bold'>Datos</h2>
        <ul>
        <li><b>Nombre:</b> {userDetails.find((detail) => detail.user_id === user.id)?.name_complete || user.name}</li>
        <li><b>Fecha de nacimiento:</b> {userDetails.find((detail) => detail.user_id === user.id)?.birth_date ?
                new Date(userDetails.find((detail) => detail.user_id === user.id)?.birth_date).toLocaleDateString('es-ES') : ''}
        </li>
        <li><b>Teléfono:</b> {userDetails.find((detail) => detail.user_id === user.id)?.phone || ''}</li> 
        <li><b>Cédula:</b> {userDetails.find((detail) => detail.user_id === user.id)?.cedula || ''}</li> 
        <li><b>Dirección:</b> {userDetails.find((detail) => detail.user_id === user.id)?.address || ''}</li> 
        </ul>
    </div>
    <div className='ml-10 mt-3'>
        <h2 className='text-violet-900  font-bold'>Tu cuenta</h2>
        <div className='flex'>
        <ul className='flex-col'>
        <li className='font-bold mt-2'>Correo electronico</li>
        <li className='mt-2'>{user.email}</li>
        <li className='mt-2'> <Link className='underline '>Modificar</Link> </li>
        </ul>
        <ul className='flex-col ml-10'>
        <li className='font-bold mt-2'>Contraseña</li>
        <li className='mt-2'>*********</li>
        <li className='mt-2'><Link className='underline'>Modificar</Link> </li>
        </ul>
        </div>
        <Modal showModal={showModal} close={closeModal} image={warning} text='Aceptar' title='¿Estás seguro que quieres eliminar tu cuenta?' handleCloseModal={() => handleDelete()} />
    </div>
    </div>
        <div className="w-full text-center"> 
          <button onClick={() => openModal()} className="mt-8 text-sm bg-black py-[0.6em] px-6 hover:text-white hover:bg-black text-center text-black bg-white border border-black">Eliminar mi cuenta</button>
        </div>
    <div>
    
    </div>
</div>
</div>
  );
}

export default Datos;
