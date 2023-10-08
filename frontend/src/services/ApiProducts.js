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

export const getPhotos = () => {
  return axios
    .get(`${API_URL}/photos`)
    .then((response) => {
      const photos = response.data;
      return photos;
    })
    .catch((error) => {
      console.error('Error fetching photos:', error);
      return [];
    });
};
export const deletePhoto = (photoId) => {
  return axios.delete(`${API_URL}/photos/${photoId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error deleting photo:', error);
      throw error;
    });
};
export const getColorsForProduct = (productId) => {
  return axios.get(`${API_URL}/products/${productId}/colors`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching colors:', error);
      throw error;
    });
};
// export const getColors = () => {
//   return axios
//     .get(`${API_URL}/colors`)
//     .then((response) => {
//       const colors = response.data;
//       return colors;
//     })
//     .catch((error) => {
//       console.error('Error fetching colors:', error);
//       return [];
//     });
// };
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

const API_BASE_URL = 'https://coral-app-c7uu2.ondigitalocean.app/api/products';

export const getProducts = () => {
  return axios
    .get(API_BASE_URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching products:', error);
      return [];
    });
};
export const editProduct = (id, formData) => axios.put(`${API_URL}/products/${id}`, formData, {
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

export const editProductQuantity = async (productId, newQuantity) => {
  try {
    const response = await axios.put(`${API_URL}/products/change-quantity/{id}${productId}`, newQuantity, { withCredentials: true });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error al editar la cantidad del producto:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error al editar la cantidad del producto:', error);
    return null;
  }
};