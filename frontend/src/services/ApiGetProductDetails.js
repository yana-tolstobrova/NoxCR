import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const fetchProductDetails = (id) => {
  return axios
    .get(`${API_URL}/products/${id}`, {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const productDetails = response.data;
      return productDetails;
    })
    .catch((error) => {
      console.error('Error fetching product details:', error);
      return {};
    });
};