import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import articlesApi from '../../api/articles';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (articleType) => {
    const response = await articlesApi.getAllArticles(articleType);
    return response;
});

export const fetchArticlesForHomePage = createAsyncThunk('articles/homepage', async () => {
    const response = await articlesApi.getArticlesForHomePage();
    return response;
});

const articlesSlice = createSlice({
    name: 'articles', //does not matter
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchArticlesForHomePage.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchArticlesForHomePage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticlesForHomePage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllArticles = (state) => state.articles.data;
export const getArticlesStatus = (state) => state.articles.status;
export const getArticlesErrors = (state) => state.articles.error;
export const getArticleById = (state, articleId) => state.articles.data.find((article) => article._id === articleId);

export default articlesSlice.reducer;
