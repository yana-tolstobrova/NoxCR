import axios from 'axios';

export const fetchProductDetails = (id) => {
  return axios
    .get(`http://localhost:8000/api/products/${id}`, {
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