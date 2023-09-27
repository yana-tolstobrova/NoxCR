import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '../../assets/addIcon.svg';
import { useNavigate } from 'react-router-dom';

function UsersList() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users', {
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            const usersData = response.data.users;
            setUsers(usersData);
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    }, []);
    return (
        <div className='py-10 px-10 h-full'>
            <div className='flex items-center justify-between mb-6'>
                 <h1 className='font-bold text-2xl text-purple'>Lista de usuarios</h1>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className="text-left">
                    <th></th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Subscription</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}  className='bg-slate-100 h-16'>
                            <td className='pl-2'>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.subscription ? 'Si' : 'No'}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {/* <div className='text-center mt-4'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
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
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastProduct >= products.length}>
                Siguiente
                </button>
            </div> */}
        </div>
    );
}

export default UsersList;
