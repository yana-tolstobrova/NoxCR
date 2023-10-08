import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { getOrders, getOrderLines } from '../services/apiOrders/ApiOrders';
import HistoryEmpty from '../components/HistoryEmpty';

function HistoryFull() {
  const { user, hasRole } = useAuth();
  const [orders, setOrders] = useState([]);
  const [orderLines, setOrderLines] = useState([]);
  const [productPhotoUrls, setProductPhotoUrls] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((ordersData) => {
        setOrders(ordersData);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setLoading(false); 
      });

    const fetchOrderLines = async () => {
      try {
        getOrderLines()
          .then((orderLinesData) => {
            setOrderLines(orderLinesData);
          })
      } catch (error) {
        console.error('Error fetching order lines:', error);
        setLoading(false); 
      }
    };

    fetchOrderLines();
  }, []);
  useEffect(() => {
    setUserOrders(orders.filter((order) => order.user_id === user.id));
  }, [orders, user]);

  if (loading) {
    return <div className='text-center'>Cargando...</div>;
  }

  return (
    <div>
      {userOrders.length === 0 ? (
        <HistoryEmpty />
      ) : (
        <table className="w-[65%] mx-auto mt-4">
          <thead className='border-solid border-b border-black'>
            <tr className="text-left h-12">
              <th>#</th>
              <th>Pedido</th>
              <th>Cantidad de productos</th>
              <th>Total</th>
              <th>Tipo de envío</th>
              <th>Fecha de pedido</th>
            </tr>
          </thead>
          <tbody>
          {userOrders
            .map((filteredOrder, index) => {
              const orderLinesForOrder = orderLines.filter((line) => line.order_id === filteredOrder.id);
              const totalQuantity = orderLinesForOrder.reduce((total, line) => total + line.quantity, 0);
              const lineDescriptions = orderLinesForOrder.map((line) => {
                return `${line.name} (${line.quantity}) - ₡${line.price}`;
              });                            
              return (
                <tr key={index} className='border-solid border-b-2'>
                  <td>{index+1}</td>
                  <td> 
                    <ul>
                      {lineDescriptions.map((lineDescription, index) => (
                        <li key={index}>{lineDescription}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{totalQuantity}</td>
                  <td>₡{filteredOrder.total_amount}</td>
                  <td>{filteredOrder.shipping_type}</td>
                  <td>{new Date(filteredOrder.created_at).toLocaleString('en-GB')}</td>
                </tr>
              );
            })}
        </tbody>
        </table>
      )}
    </div>
  );
}

export default HistoryFull;
