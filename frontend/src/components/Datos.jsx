import React, { useState, useEffect } from 'react';
import {  getUserDetails } from '../services/ApiUsers';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';



function Datos() {
    const { user } = useAuth();
    const [userDetails, setUserDetails] = useState([]);


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
console.log(userDetails);
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
    <div className='ml-10 mt-3 '>
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
    </div>
    </div>
    <div>
    
    </div>
</div>
</div>
  );
}

export default Datos;
