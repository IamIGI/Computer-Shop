import axios from 'axios';

const commentApi = axios.create({
    baseURL: 'http://localhost:5000/comments/',
    headers: { 'Content-Type': 'application/json' },
});

export const getAllComments = async (productId) => {
    try {
        const response = await commentApi.get(`/get/${productId}`);
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
    return;
};

export const getProductAverageScore = async (productId) => {
    try {
        const response = await commentApi.get(`/averageScore/${productId}`);
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
    return;
};
