import { createContext, useState, useEffect } from 'react';

const BasketContext = createContext({});

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState(
        JSON.parse(localStorage.getItem('basketItems')) == null ? [] : JSON.parse(localStorage.getItem('basketItems'))
    );

    useEffect(() => {
        let basket = JSON.parse(localStorage.getItem('basketItems'));
        let reset = [];
        localStorage.setItem('basketItems', JSON.stringify(reset));
        basket = JSON.parse(localStorage.getItem('basketItems'));
        basketItems.map((item) => basket.push(item));
        localStorage.setItem('basketItems', JSON.stringify(basket));
    }, [basketItems]);

    return <BasketContext.Provider value={{ basketItems, setBasketItems }}>{children}</BasketContext.Provider>;
};

export default BasketContext;
