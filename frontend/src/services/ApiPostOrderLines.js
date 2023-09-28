import axios from 'axios';

export const createOrderLine = async (orderLineData) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/order-lines',
      orderLineData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al crear la línea de orden:', error);
    throw error;
  }
};