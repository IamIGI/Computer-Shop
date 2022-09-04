import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import React from 'react';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { Products, Wrapper } from './AllProducts.styles';

const AllProducts = () => {
    return (
        <>
            <Wrapper>
                <ProductsFiltersSection />
                <Products>
                    <ProductPreview allProducts="yes" />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
