import axios from 'axios';
import { BASE_URL } from 'data/GlobalVariables';

const promoCodeApi = axios.create({
    baseURL: `${BASE_URL}/promocodes/`,
    header: { 'Content-Type': 'application/json' },
});

const getDiscount = async (data) => {
    try {
        const response = await promoCodeApi.post('/checkproducts', data);
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getDiscount };
