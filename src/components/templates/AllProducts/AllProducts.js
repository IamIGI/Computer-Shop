import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import React from 'react';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { Products, Wrapper } from './AllProducts.styles';
import useProduct from 'hooks/useProduct';

const AllProducts = () => {
    const { setProduct } = useProduct();
    const goToProduct = (product) => {
        setProduct(product);
    };
    return (
        <>
            <Wrapper>
                <ProductsFiltersSection />
                <Products>
                    <ProductPreview goToProduct={goToProduct} allProducts="yes" />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
