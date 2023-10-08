import React, { useEffect, useState } from 'react';
import { getOrders, getOrderLines } from '../../services/apiOrders/ApiOrders';
import { getUserDetails } from '../../services/ApiUsers';
function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [orderLines, setOrderLines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
      getOrders()
      .then((ordersData) => {
        setOrders(ordersData);
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
  }, []);

  const toggleRowAccordion = (index) => {
    if (index === openRowIndex) {
      setOpenRowIndex(null);
    } else {
      setOpenRowIndex(index);
    }
  };

  const getCurrentOrders = () => {
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    return orders.slice(indexOfFirstOrder, indexOfLastOrder);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="py-10 px-10 h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-2xl text-purple">Lista de transacciones</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left h-12">
            <th>#</th>
            <th>Fecha de compra</th>
            <th>Tipo de envio</th>
            <th>Dirección</th>
            <th>Total</th>
            <th>Nombre</th>
            <th>Télefono</th>
            <th>Cédula</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, orderId) => (
            <React.Fragment key={order.id}>
              <tr
                className={`bg-slate-100 h-16 cursor-pointer ${
                  openRowIndex === orderId ? 'bg-slate-200' : ''
                }`}
                onClick={() => toggleRowAccordion(orderId)}
              >
                <td className="pl-2">{order.id}</td>
                <td>{new Date(order.created_at).toLocaleString('en-GB')}</td>
                <td>{order.shipping_type}</td>
                <td>{order.address}</td>
                <td>₡{order.total_amount}</td>
                <td>{userDetails.find((user) => user.user_id === order.user_id)?.name_complete}</td>
                <td>{userDetails.find((user) => user.user_id === order.user_id)?.phone}</td>
                <td>{userDetails.find((user) => user.user_id === order.user_id)?.cedula}</td>
              </tr>
              {openRowIndex === orderId && (
                <tr>
                  <td colSpan="5">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left h-12">
                          <th>#</th>
                          <th>Productos</th>
                          <th>Cantidad</th>
                          <th>Precio/Unidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderLines
                        .filter((orderLine) => orderLine.order_id === order.id)
                        .map((filteredOrderLine, id) => (
                        <tr key={id}>
                            <td>{id+1}</td>
                            <td>{filteredOrderLine.name}</td>
                            <td>{filteredOrderLine.quantity}</td>
                            <td>₡{filteredOrderLine.price}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4 fixed bottom-6 left-[55%]">
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

export default OrdersList;
