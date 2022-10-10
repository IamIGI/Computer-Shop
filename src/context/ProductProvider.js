import { createContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    // console.log(localStorage.getItem('currentWebPage'));
    const [product, setProduct] = useState(
        localStorage.getItem('currentWebPage') !== undefined
            ? {}
            : JSON.parse(localStorage.getItem('currentWebPage')) == null
            ? {}
            : JSON.parse(localStorage.getItem('currentWebPage'))
    );

    localStorage.setItem('currentWebPage', JSON.stringify(product));

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
