import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export const createOrder = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, formData, {
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