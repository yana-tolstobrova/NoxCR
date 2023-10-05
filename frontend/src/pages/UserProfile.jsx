import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { getOrders, getOrderLines } from '../services/ApiOrders';
import HistoryEmpty from '../components/HistoryEmpty';

function UserProfilePage() {
const { user, hasRole } = useAuth();
const [orders, setOrders] = useState([]);
const [orderLines, setOrderLines] = useState([]);
const [productPhotoUrls, setProductPhotoUrls] = useState({});

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
  
      fetchOrderLines();
      getOrders();
  }, []);
  return (
    <div>
    <h1 className="text-center mb-8 mt-4 text-3xl ml-4 font-bold text-purple">Hola, {user.name}! </h1>
    <div className="text-center">
        Email: <span>{user.email}</span>
    </div>
    <h2 className="text-center text-2xl font-bold mt-4 text-purple">Historial de los pedidos</h2>
    <HistoryEmpty />
    <table className="w-[85%] mx-auto mt-4">
        <thead>
          <tr className="text-left h-12">
            <th>#</th>
            <th>Pedido</th>
            <th>Cantidad de productos</th>
            <th>Total</th>
            <th>Tipo de envio</th>
            <th>Fecha de pedido</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.user_id === user.id)
            .map((filteredOrder, index) => {
              const orderLinesForOrder = orderLines.filter((line) => line.order_id === filteredOrder.id);
              const totalQuantity = orderLinesForOrder.reduce((total, line) => total + line.quantity, 0);
              const lineDescriptions = orderLinesForOrder.map((line) => {
                return `${line.name} (${line.quantity}) - ₡${line.price}`;
              });                            
              return (
                <tr key={index}>
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
  </div>
  )
}

export default UserProfilePage