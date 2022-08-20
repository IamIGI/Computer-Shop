import { createContext, useState } from 'react';

const BasketContext = createContext({});
export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState([]);

    return <BasketContext.Provider value={{ basketItems, setBasketItems }}>{children}</BasketContext.Provider>;
};

export default BasketContext;
