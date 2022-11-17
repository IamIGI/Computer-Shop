import axios from 'axios';
import { BASE_URL } from 'data/GlobalVariables';

const articlesApi = axios.create({
    baseURL: `${BASE_URL}/articles/`,
    header: { 'Content-Type': 'application/json' },
});

const getAllArticles = async (type) => {
    const data = {
        type,
    };

    try {
        const response = await articlesApi.post(`/all`, data);
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

const getArticle = async (id) => {
    try {
        const response = await articlesApi.get(`/${id}`);
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

export default { getAllArticles, getArticle };
