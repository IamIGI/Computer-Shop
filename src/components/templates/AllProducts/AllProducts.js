import ProductsFiltersSection from 'components/organisms/ProductsFiltersSection/ProductsFiltersSection';
import { useState } from 'react';
import ProductPreview from 'components/organisms/ProductPreview/ProductPreview';
import { ButtonForFilters, FilterIcon, Products, Wrapper } from './AllProducts.styles';
import { filterInit } from 'data/Products';
import { MdOutlineEditNote } from 'react-icons/md';
// import Modal from 'components/atoms/Modal/Modal';
const FilterInitPosition = '-300px';

const AllProducts = () => {
    const [filters, setFilters] = useState(filterInit);
    const [showFilters, setShowFilters] = useState(FilterInitPosition);

    const handleShowFilters = (a) => {
        setShowFilters(a);
    };

    const handleFilters = (data) => {
        setFilters(data);
    };

    return (
        <>
            <Wrapper>
                <ButtonForFilters onClick={() => handleShowFilters('0px')}>
                    <FilterIcon>
                        <MdOutlineEditNote />
                    </FilterIcon>
                    FILTRY
                </ButtonForFilters>
                <ProductsFiltersSection
                    position={showFilters}
                    handleFilters={handleFilters}
                    handleShowFilters={handleShowFilters}
                    FilterInitPosition={FilterInitPosition}
                />
                <Products>
                    <ProductPreview filterInit={filterInit} allProducts="yes" filters={filters} />
                </Products>
            </Wrapper>
        </>
    );
};

export default AllProducts;
