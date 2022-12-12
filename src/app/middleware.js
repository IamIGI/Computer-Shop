import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addProductToBasket, removeBasket, deleteProduct } from 'features/basket/basketSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(addProductToBasket, removeBasket, deleteProduct),
    effect: (action, listenerApi) => {
        localStorage.setItem('basketItems', JSON.stringify(listenerApi.getState().basket.data));
        // console.log('here');
        // const basketItems = listenerApi.getState().basket.data;
        // let price = 0;
        // basketItems.map((product) => (price += product.price * product.quantity));
        // localStorage.setItem('bill', JSON.stringify(price));
    },
});
