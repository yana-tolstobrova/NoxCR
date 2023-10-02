import axios from 'axios';

// const API_USERS_URL = 'http://localhost:8000/api/users';
// const API_USER_DETAILS_URL = 'http://localhost:8000/api/user-details';

const API_URL = process.env.REACT_APP_API_URL

export const getUsers = () => {
  return axios
    .get(`${API_URL}/users`, {
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
      .get(`${API_URL}/user-details`, {
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