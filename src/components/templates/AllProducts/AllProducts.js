import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import { useState } from 'react';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { Products, Wrapper } from './AllProducts.styles';

const AllProducts = () => {
    const [filters, setFilters] = useState({
        filters: {
            producers: [],
            processors: [],
            ram: {
                min: 4,
                max: 128,
            },
            disk: {
                min: 128,
                max: 2000,
            },
        },
        sortBy: 'none',
    });

    const handleFilters = (data) => {
        setFilters(data);
    };

    return (
        <>
            <Wrapper>
                <ProductsFiltersSection handleFilters={handleFilters} />
                <Products>
                    <ProductPreview allProducts="yes" filters={filters} />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
