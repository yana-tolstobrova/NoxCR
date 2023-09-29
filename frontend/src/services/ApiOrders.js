import axios from 'axios';

const API_ORDERS_URL = 'http://localhost:8000/api/orders';
const API_ORDER_LINES_URL = 'http://localhost:8000/api/order-lines';

export const getOrders = () => {
    return axios
      .get(API_ORDERS_URL, {
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
      .get(API_ORDER_LINES_URL, {
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