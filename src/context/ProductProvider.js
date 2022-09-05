import { createContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(
        JSON.parse(localStorage.getItem('currentWebPage')) == null
            ? {}
            : JSON.parse(localStorage.getItem('currentWebPage'))
    );

    console.log(product);
    localStorage.setItem('currentWebPage', JSON.stringify(product));

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
