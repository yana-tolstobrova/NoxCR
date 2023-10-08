import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export const createOrderLine = async (orderLineData) => {
  try {
    const response = await axios.post(
      `${API_URL}/order-lines`,
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