import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
//axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {withCredentials: true});

// axios.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('auth_token');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });

export const sendShippingOrder = () => {
    return axios.get('api/send-orderConfirmation')
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