import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/api';

const webUpdatesApi = axios.create({
    baseURL: `${BASE_URL}/webUpdates/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getWebUpdates = async () => {
    try {
        const response = await webUpdatesApi.get('/get');
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};
