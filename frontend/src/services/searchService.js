import axios from 'axios';

const API_BASE_URL = "http://localhost:8000/api/search"; // Reemplaza esto con la URL de tu API

const searchService = {
  searchProducts: async (searchTerm) => {
    try {
        const response = await axios.get(`${API_BASE_URL}?search=${searchTerm}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default searchService;