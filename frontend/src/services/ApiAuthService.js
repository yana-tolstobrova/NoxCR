import axios from './axios';

export const logoutService = () => {
    return axios.post('/logout')
      .then((response) => {
        localStorage.removeItem('user');
        const confirmationMessage = response.data;
        return confirmationMessage;
      })
      .catch((error) => {
        throw error
      });
  };
  // Prueba de push