import React, { useEffect, useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { getOrders, getOrderLines } from '../services/apiOrders/ApiOrders';
import HistoryEmpty from '../components/HistoryEmpty';
import HistoryFull from '../components/HistoryFull';
import Datos from '../components/Datos';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function UserProfilePage() {
  const { user, setUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [orderLines, setOrderLines] = useState([]);
  const [productPhotoUrls, setProductPhotoUrls] = useState({});
  const [tabValue, setTabValue] = useState(0);

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <h1 className="text-center mb-8 mt-4 text-3xl ml-4 font-bold text-purple">Hola, {user.name}! </h1>
      <h2 className='text-center mb-8 text-lg font-medium'>Te damos la bienvenida a la familia de Noxis! Aquí puedes encontrar tu área personal.</h2>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"

        >
          <Tab label="Historial de Pedidos" />
          <Tab label="Datos personales" />
        </Tabs>
      </Box>
      {tabValue === 0 && <HistoryFull />}
      {tabValue === 1 && <Datos />}
    </div>
  );
}

export default UserProfilePage;
