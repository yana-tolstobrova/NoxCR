import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { getOrders, getOrderLines } from '../services/ApiOrders';
import HistoryEmpty from '../components/HistoryEmpty';
import HistoryFull from '../components/HistoryFull';
import Datos from '../components/Datos';

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
   <Datos />
    <h2 className="text-center text-2xl font-bold mt-14 text-purple">Historial de los pedidos</h2>
    <HistoryEmpty />
    {/* <HistoryFull /> */}
  </div>
  )
}

export default UserProfilePage