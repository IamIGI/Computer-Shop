import { createContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({});
    console.log('ProductProvider=---start');
    console.log(product);
    console.log('ProductProvider---end');
    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
