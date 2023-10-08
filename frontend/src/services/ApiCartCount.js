import axios from 'axios';

// const API_URL = '/api/add-to-cart'; 
const API_URL = process.env.REACT_APP_API_URL

const getCartItemCount = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/add-to-cart`);
    return response.data.count;
  } catch (error) {
    console.error('Error al obtener la cantidad de productos en el carrito:', error);
    throw error;
  }
};

export { getCartItemCount };
