import React, { useEffect, useState } from 'react';
import { getUsers, getUserDetails } from '../../services/ApiUsers';
import { getOrders, getOrderLines } from '../../services/ApiOrders';
function UsersList() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderLines, setOrderLines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
    getUsers()
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

      getOrders()
      .then((ordersData) => {
        setOrders(ordersData);
        console.log(orders)
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });

      const fetchOrderLines = async () => {
        try {
            getOrderLines()
            .then((orderLinesData) => {
          setOrderLines(orderLinesData);
         })
        } catch (error) {
          console.error('Error fetching order lines:', error);
        }
      };
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
      fetchOrderLines();
      getOrders();
  }, []);

  const getCurrentUsers = () => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    return users.slice(indexOfFirstUser, indexOfLastUser);
  };
 const toggleRowAccordion = (index) => {
    if (index === openRowIndex) {
      setOpenRowIndex(null);
    } else {
      setOpenRowIndex(index);
    }
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
            <th>Cédula</th>
            <th>Dirección</th>
            <th>Fecha de registro</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentUsers().map((user, userId) => (
            <React.Fragment key={user.id}>
            <tr
              className={`bg-slate-100 h-16 cursor-pointer ${
                openRowIndex === userId ? 'bg-slate-200' : ''
              }`}
              onClick={() => toggleRowAccordion(userId)}
            >
              <td className="pl-2">{user.id}</td>
              <td>{userDetails.find((detail) => detail.user_id === user.id)?.name_complete || user.name}</td>
              <td>{user.email}</td>
              <td>{user.subscription ? 'Si' : 'No'}</td>
              <td> {userDetails.find((detail) => detail.user_id === user.id)?.birth_date ?
                new Date(userDetails.find((detail) => detail.user_id === user.id)?.birth_date).toLocaleDateString('es-ES') : '-'}
              </td>
              <td className="pr-2">{userDetails.find((detail) => detail.user_id === user.id)?.phone || '-'}</td>
              <td className="pr-2">{userDetails.find((detail) => detail.user_id === user.id)?.cedula || '-'}</td>
              <td className="pr-2">{userDetails.find((detail) => detail.user_id === user.id)?.address || '-'}</td>
              <td>{new Date(user.created_at).toLocaleDateString('en-GB')}</td>
            </tr>
            {openRowIndex === userId && orders.some((order) => order.user_id === user.id) && (
  <tr>
    <td colSpan="9">
      <table className="w-full">
        <thead>
          <tr className="text-left h-12">
            <th>Numero de pedido</th>
            <th>Total</th>
            <th>Tipo de envio</th>
            <th>Cantidad de productos</th>
            <th>Pedido</th>
            <th>Fecha de pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.user_id === user.id)
            .map((filteredOrder, id) => {
              const orderLinesForOrder = orderLines.filter((line) => line.order_id === filteredOrder.id);
              const totalQuantity = orderLinesForOrder.reduce((total, line) => total + line.quantity, 0);
              const lineDescriptions = orderLinesForOrder.map((line) => {
                return `${line.name} (${line.quantity}) - ₡${line.price}`;
              });                            
              return (
                <tr key={id}>
                  <td>{filteredOrder.id}</td>
                  <td>₡{filteredOrder.total_amount}</td>
                  <td>{filteredOrder.shipping_type}</td>
                  <td>{totalQuantity}</td>
                  <td> 
                    <ul>
                      {lineDescriptions.map((lineDescription, index) => (
                        <li key={index}>{lineDescription}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{new Date(filteredOrder.created_at).toLocaleString('en-GB')}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </td>
  </tr>
)}

            </React.Fragment>
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
