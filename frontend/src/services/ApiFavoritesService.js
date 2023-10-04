import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

// axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {withCredentials: true});

// axios.interceptors.request.use(function (config) {
//       const token = localStorage.getItem('auth_token');
//       config.headers.Authorization = token ? `Bearer ${token}` : '';
//       return config;
//   });

const urnAddFav = 'products/add-favorite';
const urnRemoveFav= 'products/remove-favorite';
const urnGetFavs= 'products/favorites/';

// export const getFavorites = () => {
//     return axios
//       .get(`${API_URL}/${urnGetFavs}`, {
//           withCredentials: true,
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           },
//         })
//       .then((response) => response.data.orders)
//       .catch((error) => {
//         console.error('Error fetching favorites list:', error);
//         return [];
//       });
//   };


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
  //   return axios
  //     .post(`${API_URL}/${urnAddFav}/${id}`, {
  //         withCredentials: true,
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`
  //         },
  //       })
  //     .then((response) => response.data['product successfully added to Favorite List'])
  //     .catch((error) => {
  //       console.error('Error adding product to Favorite List:', error);
  //       return [];
  //     });
   };









// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {withCredentials: true});

// axios.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('auth_token');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });

// export const Favgit addoritesService = () => {
//     const urnAddFav = '/products/add-favorite';
//     const urnRemoveFav= '/products/remove-favorite';
//     const urnGetFavs= '/products/favorites/';


    

//     const addFavorite = ($id) => {
//        const res = axios.post(`${urnAddFav}/{$id}`);
//          return res;
//     }

//     const removeFavorite = ($id) => {
//         const res = axios.post(`${urnRemoveFav}/{$id}`);
//         return res;
//     }

//     const getFavorites = () => {
//         const res = axios.get(urnGetFavs);
//         return res;
//     }


//     return {
//         addFavorite, removeFavorite, getFavorites
//     }

    
//     // const getFavorites = () => {
//     //     return axios.get(urnGetFavs)
//     // .then((res) => {
//     //   return res;
//     // })
//     // .catch((error) => {
//     //   console.error('Error: no fue posible acceder a la lista de favoritos:', error);
//     //   throw error;
//     // });
//     // }
// }