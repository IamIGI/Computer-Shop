import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        products: productsReducer,
    },
});
