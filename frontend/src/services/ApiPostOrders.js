// services/orderService.js
import axios from 'axios';

export const createOrder = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/orders', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    const orderId = response.data.data.id;
    return orderId;
  } catch (error) {
    console.error('Error al crear la orden:', error);
    throw error; 
  }
};