import React, { useState, useEffect } from 'react';
import {  getUserDetails } from '../services/ApiUsers';
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';



function Datos() {
    const { user, hasRole } = useAuth();
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
    <div className='flex justify-center'>
    <div className='flex-row content-center'>
    <div className='flex-row justify-center ml-10'>
        <p>Modifica tus datos personales a continuación para que tu cuenta esté actualizada</p>
    </div>
    <div className='flex mt-8 justify-center'>
    <div className='pt-3 ml-10 '>
        <h2 className='text-violet-900 mb-2 font-bold'>Datos</h2>
        <ul>
        <li>{user.name}</li>
        <li> {userDetails.find((detail) => detail.user_id === user.id)?.birth_date ?
                new Date(userDetails.find((detail) => detail.user_id === user.id)?.birth_date).toLocaleDateString('es-ES') : '-'}
              </li>
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
        <li className='mt-2'>{user.password}</li>
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
