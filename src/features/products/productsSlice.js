import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductsApi from 'api/products';
import { getProduct } from 'api/products';
import { filterInit } from './productsFilters';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
    filters: filterInit,
    productById: {},
    productById_status: 'idle',
    addedCommentFlag: false,
    mayLikeProducts: [],
    mayLikeStatus: 'idle',
    refreshProducts: false,
};

export const fetchProducts = createAsyncThunk('products/all', async (arg, { getState }) => {
    const state = getState();
    const response = await ProductsApi.post('/all', state.products.filters);
    return response.data;
});

//for now fetch all products
export const fetchMayLikeItems = createAsyncThunk('products/mayLikeItems', async () => {
    const response = await ProductsApi.post('/all', filterInit);
    return response.data;
});

export const fetchProductById = createAsyncThunk('product/code', async (code) => {
    const response = await getProduct(code);
    return response;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleFilters(state, action) {
            const { name, value } = action.payload;
            switch (name) {
                case 'searchTerm':
                    state.filters.searchTerm = value;
                    break;
                case 'discounts':
                    state.filters.filters.discounts = !value;
                    break;
                case 'producers':
                    state.filters.filters.producers = [];
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.filters.producers.push(value[i].value);
                    }
                    break;
                case 'processors':
                    state.filters.filters.processors = [];
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.filters.processors.push(value[i].value);
                    }
                    break;
                case 'ram.min':
                    if (!isNaN(value)) state.filters.filters.ram.min = value;
                    break;
                case 'ram.max':
                    if (!isNaN(value)) state.filters.filters.ram.max = value;
                    break;
                case 'disk.min':
                    if (!isNaN(value)) state.filters.filters.disk.min = value;
                    break;
                case 'disk.max':
                    if (!isNaN(value)) state.filters.filters.disk.max = value;
                    break;
                case 'sortBy':
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].checked) state.filters.sortBy = value[i].value;
                    }
                    break;
                default:
                    console.log(`Bad key name: ${name}`);
                    break;
            }
        },
        clearFilters(state, action) {
            state.filters = filterInit;
        },
        handleAddedComment(state, action) {
            state.addedCommentFlag = action.payload;
        },
        handleRefreshProducts(state, action) {
            state.refreshProducts = !state.refreshProducts;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchProductById.pending, (state, action) => {
                state.productById_status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.productById_status = 'succeeded';
                state.productById = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.productById_status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchMayLikeItems.pending, (state, action) => {
                state.mayLikeStatus = 'loading';
            })
            .addCase(fetchMayLikeItems.fulfilled, (state, action) => {
                state.mayLikeStatus = 'succeeded';
                state.mayLikeProducts = action.payload;
            })
            .addCase(fetchMayLikeItems.rejected, (state, action) => {
                state.mayLikeStatus = 'failed';
                state.error = action.error.message;
            });
    },
});

export const getAllProducts = (state) => state.products.data;
export const getProductsStatus = (state) => state.products.status;
export const getProductsErrors = (state) => state.products.error;
export const getProductsFilters = (state) => state.products.filters;

export const getProductById = (state) => state.products.productById;
export const getProductByIdStatus = (state) => state.products.productById_status;
export const getProductAddCommentFlag = (state) => state.products.addedCommentFlag;

export const getMayLikeProducts = (state) => state.products.mayLikeProducts;
export const getMayLikeProductsStatus = (state) => state.products.mayLikeStatus;

export const getRefreshProduct = (state) => state.products.refreshProducts;

export const { clearFilters, handleFilters, handleAddedComment, handleRefreshProducts } = productsSlice.actions;

export default productsSlice.reducer;
