import axios from 'axios';
import { BASE_URL } from 'data/GlobalVariables';

const contactApi = axios.create({
    baseURL: `${BASE_URL}/contact/`,
    headers: { 'Content-Type': 'application/json' },
});

export const sendContactAPI = async (data) => {
    try {
        const response = await contactApi.post('/sendmessage', data);
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
