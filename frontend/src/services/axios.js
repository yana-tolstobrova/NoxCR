import Axios from 'axios';

const axios = Axios.create({
	baseURL: "https://coral-app-c7uu2.ondigitalocean.app/api",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
});

export default axios;