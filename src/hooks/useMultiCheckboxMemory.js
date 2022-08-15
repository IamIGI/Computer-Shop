import useLocalStorage from './useLocalStorage';

const useMultiCheckboxMemory = (key, initValue) => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const changeValue = (newValue) => {
        setValue(newValue);
    };

    return [value, changeValue];
};

export default useMultiCheckboxMemory;
