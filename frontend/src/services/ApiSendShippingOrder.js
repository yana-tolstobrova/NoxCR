import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export const sendShippingOrder = () => {
    return axios.get(`${API_URL}/send-orderConfirmation`)
      .then((response) => {
        const confirmationMessage = response.data;
        //window.alert('Tu pedido ha sido enviado con éxito')
        return confirmationMessage;
      })
      .catch((error) => {
        console.error('Error sending your order:', error);
        return [];
      });
  };