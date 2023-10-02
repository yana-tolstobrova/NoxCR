import Axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

const axios = Axios.create({
	baseURL: `${API_URL}`,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
});

export default axios;