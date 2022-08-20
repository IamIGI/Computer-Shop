import { useContext } from 'react';
import BasketContext from 'context/BasketProvider';

const useBasket = () => {
    return useContext(BasketContext);
};

export default useBasket;
