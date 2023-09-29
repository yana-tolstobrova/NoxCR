import React, { useEffect, useState } from 'react';
import { getUsers, getUserDetails } from '../../services/ApiUsers';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    getUsers()
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

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
  }, []);

  const getCurrentUsers = () => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    return users.slice(indexOfFirstUser, indexOfLastUser);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="py-10 px-10 h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-2xl text-purple">Lista de usuarios</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left h-12">
            <th></th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Suscripción</th>
            <th>Fecha de nacimiento</th>
            <th>Teléfono</th>
            <th>Fecha de registro</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentUsers().map((user, index) => (
            <tr key={user.id} className="bg-slate-100 h-16">
              <td className="pl-2">{index + 1}</td>
              <td>{userDetails.find((detail) => detail.user_id === user.id)?.name_complete || user.name}</td>
              <td>{user.email}</td>
              <td>{user.subscription ? 'Si' : 'No'}</td>
              
              <td> {userDetails.find((detail) => detail.user_id === user.id)?.birth_date ?
                new Date(userDetails.find((detail) => detail.user_id === user.id)?.birth_date).toLocaleDateString('es-ES') : '-'}
              </td>
              <td className="pr-2">{userDetails.find((detail) => detail.user_id === user.id)?.phone || '-'}</td>
              <td>{new Date(user.created_at).toLocaleDateString('en-GB')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`${
              currentPage === pageNumber ? 'bg-icon-accent' : 'bg-none'
            } px-3 py-1 mx-2`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default UsersList;
