import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL

export const createUserDetails = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/user-details`,
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
