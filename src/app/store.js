import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import productsReducer from '../features/products/productsSlice';
import basketReducer from '../features/basket/basketSlice';
import commentsReducer from '../features/comments/commentsSlice';
import { listenerMiddleware } from './middleware';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        products: productsReducer,
        basket: basketReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), listenerMiddleware.middleware],
});
