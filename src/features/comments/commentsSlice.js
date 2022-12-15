import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCommentsAPI, getProductAverageScore } from 'api/comments';
import { ACTIONS as ACTIONS_COMMENT_FILTERS } from './commentFiltersActions.js';

const filterInit = { productId: '629d359fd1cd32ed85648fbd', filters: { rating: 0, confirmed: false }, sortBy: 'date' };

const initialState = {
    data: {}, //{comments: [], images: [], length: 1. length_AllComments: 1}
    averageScore: { data: {}, status: 'idle' },
    status: 'idle',
    error: null,
    filters: filterInit,
    images: {
        isOpenGallery: [false],
        chosenImageIndex: 0,
    },
    refreshComments: false,
};

export const fetchComments = createAsyncThunk('comments/productId', async (arg, { getState }) => {
    const state = getState();
    let commentsFilters = state.comments.filters;
    const updatedCommentsFilters = { ...commentsFilters, productId: state.products.productById._id };
    const response = await getAllCommentsAPI(updatedCommentsFilters);
    return response;
});

export const fetchAverageScore = createAsyncThunk('comments/averageScore', async (arg, { getState }) => {
    const response = await getProductAverageScore(getState().products.productById._id);
    return response;
});

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        handleFilters(state, action) {
            const { name, value } = action.payload;

            switch (name) {
                case ACTIONS_COMMENT_FILTERS.PRODUCT_ID:
                    state.filters.productId = value;
                    break;
                case ACTIONS_COMMENT_FILTERS.RATING:
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.filters.rating = value[i].value;
                    }
                    break;
                case ACTIONS_COMMENT_FILTERS.CONFIRMED:
                    state.filters.filters.confirmed = value;
                    break;
                case ACTIONS_COMMENT_FILTERS.SORT_BY:
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.sortBy = value[i].value;
                    }
                    break;
                default:
                    console.log(`Bad key name: ${name}k`);
                    break;
            }
        },
        clearFilters(state, action) {
            state.filters = filterInit;
        },
        handleChooseImage(state, action) {
            state.images.chosenImageIndex = action.payload;
            state.images.isOpenGallery = [true];
        },
        closeGallery(state, action) {
            state.images.isOpenGallery = [false];
        },
        refreshComments(state, action) {
            state.refreshComments = !state.refreshComments;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAverageScore.pending, (state, action) => {
                state.averageScore.status = 'loading';
            })
            .addCase(fetchAverageScore.fulfilled, (state, action) => {
                state.averageScore.status = 'succeeded';
                state.averageScore.data = action.payload;
            })
            .addCase(fetchAverageScore.rejected, (state, action) => {
                state.averageScore.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const getAllCommentsData = (state) => state.comments.data;
export const getCommentsStatus = (state) => state.comments.status;
export const getCommentsErrors = (state) => state.comments.error;
export const getNumberOfCommentsWithoutFilters = (state) => state.comments.data.length_AllComments;

export const getCommentsFilters = (state) => state.comments.filters;
export const getCommentsFiltersIsConfirmed = (state) => state.comments.filters.filters.confirmed;

export const getAverageScore = (state) => state.comments.averageScore.data;
export const getAverageScoreStatus = (state) => state.comments.averageScore.status;

export const isOpenGalleryStatus = (state) => state.comments.images.isOpenGallery;
export const chosenImageIndex = (state) => state.comments.images.chosenImageIndex;

export const isRefreshComments = (state) => state.comments.refreshComments;

export const { handleFilters, clearFilters, handleChooseImage, closeGallery, refreshComments } = commentsSlice.actions;

export default commentsSlice.reducer;
