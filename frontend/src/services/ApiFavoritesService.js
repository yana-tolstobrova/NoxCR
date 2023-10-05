import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL



export const fetchFavorites = () => {
  return axios
    .get(`${API_URL}/products/favorites`,
    { withCredentials: true  })
    .then((response) => {
      const favoriteProducts = response.data;
      return favoriteProducts;
    })
    .catch((error) => {
      console.error('Error fetching favorites products:', error);
      return [];
    });
};

  export const removeFavorite = (id) => {
    return axios
      .post(`${API_URL}/products/remove-favorite/${id}`, {}, {
          withCredentials: true
        })
      .then((response) => response.data['product successfully removed'])
      .catch((error) => {
        console.error('Error removing product from favorite list:', error);
        return [];
      });
   };

   export const addFavorite = (id) => {
    return axios
      .post(`${API_URL}/products/add-favorite/${id}`, {}, {
          withCredentials: true
        })
      .then((response) => response.data['product successfully added to your favorite list'])
      .catch((error) => {
        console.error('Error adding product to the favorite list:', error);
        return [];
      });
    
  
   };









