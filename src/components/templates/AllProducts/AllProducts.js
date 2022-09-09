import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import { useState } from 'react';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { Products, Wrapper } from './AllProducts.styles';
import { filterInit } from 'data/Products';

const AllProducts = () => {
    const [filters, setFilters] = useState(filterInit);

    const handleFilters = (data) => {
        setFilters(data);
    };

    return (
        <>
            <Wrapper>
                <ProductsFiltersSection handleFilters={handleFilters} />
                <Products>
                    <ProductPreview filterInit={filterInit} allProducts="yes" filters={filters} />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
