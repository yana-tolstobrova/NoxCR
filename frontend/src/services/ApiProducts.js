import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

export const cardsProducts = () => {
  return axios
    .get(`${API_URL}/products`)
    .then((response) => {
      const products = response.data;
      return products;
    })
    .catch((error) => {
      console.error('Error fetching cards:', error);
      return [];
    });
};


//   export const createProduct = (formData) => axios.post(`http://localhost:8000/api/products`, formData, {
//     withCredentials: true,
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//   .then((response) => response.data)
//   .catch((error) => {
//     console.error('Error creating product:', error);
// });

const API_BASE_URL = 'http://localhost:8000/api/products';

export const getProducts = () => {
  return axios
    .get(API_BASE_URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching products:', error);
      return [];
    });
};
export const editProduct = (id, formData) => axios.put(`${API_BASE_URL}/${id}`, formData, {
    withCredentials: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.data)
  .catch((error) => {
    throw error;
  });
  
export const deleteProduct = (id) => {
  return axios
    .delete(`${API_BASE_URL}/${id}`, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.status === 200)
    .catch((error) => {
      console.error('Error deleting product:', error);
      return false;
    });
};

export const reverseProducts = () => {
  return axios
    .get(API_BASE_URL)
    .then((response) => response.data.slice().reverse())
    .catch((error) => {
      console.error('Error fetching reversed products:', error);
      return [];
    });
};