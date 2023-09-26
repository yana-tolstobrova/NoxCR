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

export const ApiFavoriteService = () => {
    const urnAddFav = 'api/register';
    const urnRemoveFav= 'api/login';
    const urnGetFavs= 'api/logout';

    const addFavorite = ($id) => {
       const res = axios.post(urnAddFav, $id);
         return res;
    }

    const removeFavorite = ($id) => {
        const res = axios.post(urnRemoveFav, $id);
        return res;
    }

    const getFavorites = () => {
        const res = axios.post(urnGetFavs);
        return res;
    }

    // const logout = () => {
    //     return axios.get(urnGetFavs)
    // .then((res) => {
    //   return res;
    // })
    // .catch((error) => {
    //   console.error('Error: no fue posible acceder a la lista de favoritos:', error);
    //   throw error;
    // });
    // }

    return {
        addFavorite, removeFavorite, getFavorites
    }
}