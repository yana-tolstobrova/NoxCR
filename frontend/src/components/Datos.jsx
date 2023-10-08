import React, { useState, useEffect } from 'react';
import {  getUserDetails, deleteUser, updateUserDetails } from '../services/ApiUsers';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';
import Modal from '../components/ModalSuccess';
import warning from '../assets/warning.svg';

function Datos() {
    const [userDetails, setUserDetails] = useState([]);
    const { user, setUser } = useAuth();
    const [editMode, setEditMode] = useState(false);
    const [editedEmail, setEditedEmail] = useState(user.email);
    const [editedPassword, setEditedPassword] = useState("");
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
              className='border border-black p-1 w-[10em]'
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              /></div>
      );
  } else {
      return <p className='w-[10em] py-2'>{user.email}</p>;
  }
};

const renderPasswordField = () => {
  if (editMode) {
      return (
          <div className='mt-2'><input
              type="password"
              placeholder='********'
              className='border border-black p-1 w-[10em]'
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
          /></div>
      );
  } else {
      return <p className='py-2 w-[10em]'>*********</p>;
  }
};

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
    <div className='flex-row justify-center mx-10'>
        <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada</p>
    </div>
    <div className='flex mt-8 justify-between'>
    <div className='pt-3 w-1/2'>
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
    <div className='mt-3 w-1/2'>
        <h2 className='text-violet-900  font-bold'>Tu cuenta</h2>
        <div>
            <div className='flex gap-6'>
              <div>
                <p className='font-bold mt-2'>Correo electronico</p>
                {renderEmailField()}                
              </div>
              <div>
                <p className='font-bold mt-2'>Contraseña</p>
                {renderPasswordField()}                
              </div>
            </div>
            <div className='mt-2'>
                {editMode ? (
                <div className='w-full flex gap-6 mt-4'>
                <button onClick={handleSave} className="text-sm bg-black py-2 px-4 text-white hover:text-black hover:bg-white text-center border border-black">Guardar</button>
                <button onClick={handleCancel} className="text-sm bg-black py-2 px-4 hover:text-white hover:bg-black text-center text-black bg-white border border-black">Cancelar</button>
                </div>
                ) : (
                  <div className='w-full flex gap-6 mt-4'>
                    <button onClick={handleEditClick} className="text-sm bg-black py-2 px-4 hover:text-white hover:bg-black text-center text-black bg-white border border-black">Modificar</button>
                    <button onClick={() => openModal()} className="text-sm bg-black py-2 px-6 hover:text-white hover:bg-black text-center text-black bg-white border border-black">Eliminar mi cuenta</button>
                  </div>
                )}
                </div>                           
        </div>
        <Modal showModal={showModal} close={closeModal} image={warning} text='Aceptar' title='¿Estás seguro que quieres eliminar tu cuenta?' handleCloseModal={() => handleDelete()} />
    </div>
    </div>
        <div className="w-full text-center"> 
        </div>
    <div>
    
    </div>
</div>
</div>
  );
}

export default Datos;
