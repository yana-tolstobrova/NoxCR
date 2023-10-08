import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const getOrders = () => {
    return axios
      .get(`${API_URL}/orders`, {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
      .then((response) => response.data.orders)
      .catch((error) => {
        console.error('Error fetching users:', error);
        return [];
      });
  };

  export const getOrderLines = () => {
    return axios
      .get(`${API_URL}/order-lines`, {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
      .then((response) => response.data['order-lines'])
      .catch((error) => {
        console.error('Error fetching users:', error);
        return [];
      });
  };