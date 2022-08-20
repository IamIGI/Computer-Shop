import { createContext, useEffect, useState } from 'react';

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
    const [orderItem, setOrderItem] = useState({});
    console.log(orderItem);

    return <OrderContext.Provider value={{ orderItem, setOrderItem }}>{children}</OrderContext.Provider>;
};

export default OrderContext;
