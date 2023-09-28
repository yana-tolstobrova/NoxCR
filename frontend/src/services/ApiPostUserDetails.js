// api.js

import axios from 'axios';

export const createUserDetails = async (formData) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/user-details',
      formData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos del usuario:', error);
    throw error;
  }
};
