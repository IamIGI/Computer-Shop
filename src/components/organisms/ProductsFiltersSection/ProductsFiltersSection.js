import { useEffect, useState } from 'react';
import { Producers, Processors, filterOptions } from 'data/ProductsFilters';
import {
    InputField,
    SearchDescription,
    SearchField,
    SearchSection,
    Title,
    Wrapper,
    DiscountFilter,
    DiscountDesc,
    DiscountCheckbox,
    FilterVerticalSection,
    SmallScreenSize,
    Margin,
} from './ProductsFiltersSection.style';
import { Button } from 'components/atoms/Button/Button';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, getProductsFilters, handleFilters } from 'features/products/productsSlice';

const ProductsFiltersSection = ({ position, handleShowFilters, FilterInitPosition }) => {
    const dispatch = useDispatch();
    const productsFilters = useSelector(getProductsFilters);

    const [clearSortBy, setClearSortBy] = useState(false);
    const [clearProducers, setClearProducers] = useState(false);
    const [clearProcessors, setClearProcessors] = useState(false);

    const handleSortBy = (data) => {
        dispatch(handleFilters({ name: 'sortBy', value: data }));
    };

    const handleProducers = (data) => {
        dispatch(handleFilters({ name: 'producers', value: data }));
    };

    const handleProcessors = (data) => {
        dispatch(handleFilters({ name: 'processors', value: data }));
    };

    const handleDiscount = () => {
        dispatch(handleFilters({ name: 'discounts', value: productsFilters.filters.discounts }));
    };

    const handleClearFilters = () => {
        dispatch(clearFilters());
        setClearSortBy(true);
        setClearProducers(true);
        setClearProcessors(true);
    };

    return (
        <Wrapper position={position} onMouseLeave={() => handleShowFilters(FilterInitPosition)}>
            <SearchSection>
                <SearchField
                    placeholder="Czego szukasz?"
                    value={productsFilters.searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    onChange={(e) => dispatch(handleFilters({ name: 'searchTerm', value: e.target.value }))}
                />
                <SearchDescription>Wyszukiwanie</SearchDescription>
            </SearchSection>

            <SetFilterItems
                OneTimeChoice={true}
                width="250px"
                description={'Sortuj'}
                filterData={filterOptions}
                handleItems={handleSortBy}
                clearItems={clearSortBy}
            />

            <Title>Status</Title>
            <DiscountFilter>
                <DiscountCheckbox
                    type="checkbox"
                    onChange={() => handleDiscount()}
                    checked={productsFilters.filters.discounts}
                />
                <DiscountDesc onClick={() => handleDiscount()}>Promocje</DiscountDesc>
            </DiscountFilter>

            <SetFilterItems
                OneTimeChoice={false}
                width="250px"
                description={'Produkty'}
                filterData={Producers}
                handleItems={handleProducers}
                clearItems={clearProducers}
                showConfirmButtonOnSmallScreen={true}
            />

            <SetFilterItems
                OneTimeChoice={false}
                width="250px"
                description={'Procesory'}
                filterData={Processors}
                handleItems={handleProcessors}
                clearItems={clearProcessors}
                showConfirmButtonOnSmallScreen={true}
            />

            <Title>RAM</Title>
            <FilterVerticalSection>
                <InputField
                    // onChange={(e) => handleInput('ram', 'min', e.target.value)}
                    onChange={(e) => dispatch(handleFilters({ name: 'ram.min', value: e.target.value }))}
                    value={productsFilters.filters.ram.min}
                    placeholder="od GB"
                />
                -
                <InputField
                    // onChange={(e) => handleInput('ram', 'max', e.target.value)}
                    onChange={(e) => dispatch(handleFilters({ name: 'ram.max', value: e.target.value }))}
                    value={productsFilters.filters.ram.max}
                    placeholder="do GB"
                />
            </FilterVerticalSection>
            <Title>Dysk</Title>
            <FilterVerticalSection>
                <InputField
                    // onChange={(e) => handleInput('disk', 'min', e.target.value)}
                    onChange={(e) => dispatch(handleFilters({ name: 'disk.min', value: e.target.value }))}
                    value={productsFilters.filters.disk.min}
                    placeholder="od GB"
                />{' '}
                -
                <InputField
                    // onChange={(e) => handleInput('disk', 'max', e.target.value)}
                    onChange={(e) => dispatch(handleFilters({ name: 'disk.max', value: e.target.value }))}
                    value={productsFilters.filters.disk.max}
                    placeholder="do GB"
                />
            </FilterVerticalSection>
            <Margin>
                <Button onClick={() => handleClearFilters()}>Wyczyść filtry</Button>
            </Margin>
            <SmallScreenSize>
                <Button onClick={() => handleShowFilters(FilterInitPosition)}>Zapisz / Schowaj</Button>
            </SmallScreenSize>
        </Wrapper>
    );
};

export default ProductsFiltersSection;
