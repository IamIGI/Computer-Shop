import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/api';

const commentApi = axios.create({
    baseURL: `${BASE_URL}/comments/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getAllComments = async (data) => {
    try {
        const response = await commentApi.post(`/get`, data);
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

export const sendCommentAPI = async (data) => {
    try {
        const response = await commentApi.post('/add', data);
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

export const addLike = async (data) => {
    try {
        const response = await commentApi.post('/like', data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            return err.response.status;
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};
