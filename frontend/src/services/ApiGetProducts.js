import axios from 'axios';

export const cardsProducts = () => {
  return axios
    .get('http://localhost:8000/api/products')
    .then((response) => {
      const products = response.data;
      return products;
    })
    .catch((error) => {
      console.error('Error fetching cards:', error);
      return [];
    });
};