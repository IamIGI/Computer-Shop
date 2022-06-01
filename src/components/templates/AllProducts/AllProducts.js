import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import React from 'react';
import { products } from 'data/Products';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { Products, Wrapper } from './AllProducts.styles';

const AllProducts = () => {
    return (
        <>
            <Wrapper>
                <ProductsFiltersSection />
                <Products>
                    <ProductPreview products={products} allProducts="yes" />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
