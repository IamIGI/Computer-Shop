import { useContext } from 'react';
import OrderContext from 'context/OrderItemProvider';

const useOrder = () => {
    return useContext(OrderContext);
};

export default useOrder;
