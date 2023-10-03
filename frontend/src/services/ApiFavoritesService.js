import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', {withCredentials: true});

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const FavoritesService = () => {
    const urnAddFav = '/products/add-favorite';
    const urnRemoveFav= '/products/remove-favorite';
    const urnGetFavs= '/products/favorites/';

    const addFavorite = ($id) => {
       const res = axios.post(`${urnAddFav}/{$id}`);
         return res;
    }

    const removeFavorite = ($id) => {
        const res = axios.post(`${urnRemoveFav}/{$id}`);
        return res;
    }

    const getFavorites = () => {
        const res = axios.get(urnGetFavs);
        return res;
    }


    return {
        addFavorite, removeFavorite, getFavorites
    }

    
    // const getFavorites = () => {
    //     return axios.get(urnGetFavs)
    // .then((res) => {
    //   return res;
    // })
    // .catch((error) => {
    //   console.error('Error: no fue posible acceder a la lista de favoritos:', error);
    //   throw error;
    // });
    // }
}