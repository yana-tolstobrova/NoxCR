import axios from 'axios';

export const sendShippingOrder = async (emailData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/send-confirmation-email', emailData, {
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


  