import axios from 'axios';

export const sendShippingOrder = () => {
    return axios.get('http://localhost:8000/api/send-orderConfirmation')
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