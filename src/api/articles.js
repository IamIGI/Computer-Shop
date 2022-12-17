import axios from 'axios';
import { BASE_URL } from 'data/URL';

const articlesApi = axios.create({
    baseURL: `${BASE_URL}/articles/`,
    header: { 'Content-Type': 'application/json' },
});

const getAllArticles = async (type) => {
    try {
        const response = await articlesApi.get(`/all/${type}`);
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

const getArticlesForHomePage = async (type) => {
    try {
        const response = await articlesApi.get('homepage');
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllArticles, getArticle, getArticlesForHomePage };
