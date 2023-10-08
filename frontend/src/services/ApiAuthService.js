import axios from './axios';

const API_URL = process.env.REACT_APP_API_URL

export const logoutService = () => {
    return axios.post(`${API_URL}/logout`)
      .then((response) => {
        localStorage.removeItem('user');
        const confirmationMessage = response.data;
        return confirmationMessage;
      })
      .catch((error) => {
        throw error
      });
  };
