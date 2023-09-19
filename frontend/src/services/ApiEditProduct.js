import axios from 'axios';

export const editProduct = (id, formData) => axios.put(`http://localhost:8000/api/products/${id}`, formData, {
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
  