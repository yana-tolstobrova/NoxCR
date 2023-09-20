import axios from './axios';

const searchService = {
  searchProducts: async (searchTerm) => {
    try {
      const response = await axios.get(`/search?term=${searchTerm}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default searchService;