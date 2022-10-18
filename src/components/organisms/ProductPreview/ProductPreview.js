import { useState, useEffect } from 'react';
import ProductsApi from 'api/products';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import BadFiltersInfo from 'components/molecules/BadFiltersInfo/BadFiltersInfo';
import useRefresh from 'hooks/useRefresh';
import useWindowSize from 'hooks/useWindowSize';
import ProductPreviewItem from 'components/molecules/ProductPreviewItem/ProductPreviewItem';

const ProductPreview = ({ filterInit, allProducts, filters, limitTheNumber }) => {
    const [products, setProducts] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const { refresh } = useRefresh();
    const [numberOfProducts, setNumberOfProducts] = useState();
    const windowSize = useWindowSize();
    let showProducts = [];

    useEffect(() => {
        const fetchProducts = async (data) => {
            try {
                if (JSON.stringify(filterInit) !== JSON.stringify(filters)) setWaitForFetch(true);

                const response = await ProductsApi.post('/all', data);
                setProducts(response.data);
                setNumberOfProducts(response.data.length);
                setWaitForFetch(false);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchProducts(filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, refresh]);

    //--------------------------------------------
    const handleNumberOfProducts = () => {
        if (limitTheNumber === 'yes') {
            if (windowSize.width <= 1640 && windowSize.width > 1100) {
                setNumberOfProducts(2);
            } else if (windowSize.width <= 964 && windowSize.width > 685) {
                setNumberOfProducts(2);
            } else {
                setNumberOfProducts(3);
            }
        }
    };

    useEffect(() => {
        handleNumberOfProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, products]);

    //---------------

    if (products.length > 0) {
        for (let i = 0; i < numberOfProducts; i++) {
            showProducts.push(products[i]);
        }
    }

    return (
        <>
            {waitForFetch ? (
                <>
                    <LoadingAnimation loadingSize={15} />
                </>
            ) : products.length === 0 ? (
                <>
                    <BadFiltersInfo />
                </>
            ) : (
                <>
                    {showProducts.map((item, index) => (
                        <>
                            <ProductPreviewItem key={index} item={item} allProducts={allProducts} />
                        </>
                    ))}
                </>
            )}
        </>
    );
};

export default ProductPreview;
