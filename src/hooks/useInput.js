import useLocalStorage from './useLocalStorage';
import useBasket from 'hooks/useBasket';

const useInput = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, initValue);
    const { basketItems, setBasketItems } = useBasket();

    const reset = () => {
        setValue(initValue);
    };

    const attributeObj = {
        value,
        onChange: (e) => setValue(e.target.value),
    };

    return [value, reset, attributeObj];
};

export default useInput;
