import axios from 'axios';

const API_USERS_URL = 'http://localhost:8000/api/users';
const API_USER_DETAILS_URL = 'http://localhost:8000/api/user-details';

export const getUsers = () => {
  return axios
    .get(API_USERS_URL, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    .then((response) => response.data.users)
    .catch((error) => {
      console.error('Error fetching users:', error);
      return [];
    });
};

export const getUserDetails = () => {
    return axios
      .get(API_USER_DETAILS_URL, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.data['user-details'])
      .catch((error) => {
        console.error('Error fetching user details:', error);
        return [];
      });
  };