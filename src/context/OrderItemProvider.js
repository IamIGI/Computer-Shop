import { createContext, useState } from 'react';

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
    const [orderItem, setOrderItem] = useState(
        JSON.parse(localStorage.getItem('currentWebPage')) == null
            ? {}
            : JSON.parse(localStorage.getItem('currentWebPage'))
    );

    localStorage.setItem('currentWebPage', JSON.stringify(orderItem));

    return <OrderContext.Provider value={{ orderItem, setOrderItem }}>{children}</OrderContext.Provider>;
};

export default OrderContext;
