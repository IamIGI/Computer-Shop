import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/products/',
    headers: { 'Content-Type': 'application/json' },
});

const productApi = axios.create({
    baseURL: 'http://localhost:5000/products/',
    headers: { 'Content-Type': 'application/json' },
});

export const getProduct = async (code) => {
    try {
        const response = await productApi.get(`/${code}`);
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
