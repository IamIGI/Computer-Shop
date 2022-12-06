import { getProduct } from 'api/products';
import { createContext, useState } from 'react';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const [waitForFetchProduct, setWaitForFetchProduct] = useState(true);
    const [product, setProduct] = useState({});
    const [refreshProduct, setRefreshProduct] = useState(false);
    const [addedComment, setAddedComment] = useState(false);

    async function fetchProduct(code) {
        setWaitForFetchProduct(true);
        const response = await getProduct(code);
        setProduct(response);

        setWaitForFetchProduct(false);
    }

    const handleRefreshProduct = () => {
        setRefreshProduct(!refreshProduct);
    };

    const increaseNumberOfCommentsInProductMenu = () => {
        setAddedComment(true);
    };

    return (
        <ProductContext.Provider
            value={{
                product,
                refreshProduct,
                waitForFetchProduct,
                addedComment,
                setProduct,
                fetchProduct,
                handleRefreshProduct,
                increaseNumberOfCommentsInProductMenu,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
