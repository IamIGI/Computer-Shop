import { useState } from 'react';
import { Producers, Processors, filterOptions } from 'data/ProductsFilters';
import {
    InputField,
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

import SearchTermField from 'components/atoms/SearchTermField/SearchTermField';

const ProductsFiltersSection = ({ position, handleShowFilters, FilterInitPosition }) => {
    const dispatch = useDispatch();
    const productsFilters = useSelector(getProductsFilters);

    const [clearSearchField, setClearSearchField] = useState(false);
    const [clearSortBy, setClearSortBy] = useState(false);
    const [clearProducers, setClearProducers] = useState(false);
    const [clearProcessors, setClearProcessors] = useState(false);
    const [resetSortBy, setResetSortBy] = useState(false);

    const handleResetSortBy = (value) => {
        setResetSortBy(value);
    };

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

    const handleClearSortBy = () => {
        setClearSortBy(false);
    };
    const handleClearProducers = () => {
        setClearProducers(false);
    };
    const handleClearProcessors = () => {
        setClearProcessors(false);
    };

    const handleClearFilters = () => {
        handleResetSortBy(true);
        dispatch(clearFilters());
        setClearSearchField((prevValue) => !prevValue);
        setClearSortBy(true);
        setClearProducers(true);
        setClearProcessors(true);
    };

    return (
        <Wrapper position={position} onMouseLeave={() => handleShowFilters(FilterInitPosition)}>
            <SearchTermField clearSearchField={clearSearchField} />

            <SetFilterItems
                OneTimeChoice={true}
                width="250px"
                description={'Sortuj'}
                filterData={filterOptions}
                handleItems={handleSortBy}
                clearItems={clearSortBy}
                handleReset={handleResetSortBy}
                reset={resetSortBy}
                handleClearItems={handleClearSortBy}
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
                handleClearItems={handleClearProducers}
            />

            <SetFilterItems
                OneTimeChoice={false}
                width="250px"
                description={'Procesory'}
                filterData={Processors}
                handleItems={handleProcessors}
                clearItems={clearProcessors}
                showConfirmButtonOnSmallScreen={true}
                handleClearItems={handleClearProcessors}
            />

            <Title>RAM</Title>
            <FilterVerticalSection>
                <InputField
                    onChange={(e) => dispatch(handleFilters({ name: 'ram.min', value: e.target.value }))}
                    value={productsFilters.filters.ram.min}
                    placeholder="od GB"
                />
                -
                <InputField
                    onChange={(e) => dispatch(handleFilters({ name: 'ram.max', value: e.target.value }))}
                    value={productsFilters.filters.ram.max}
                    placeholder="do GB"
                />
            </FilterVerticalSection>
            <Title>Dysk</Title>
            <FilterVerticalSection>
                <InputField
                    onChange={(e) => dispatch(handleFilters({ name: 'disk.min', value: e.target.value }))}
                    value={productsFilters.filters.disk.min}
                    placeholder="od GB"
                />{' '}
                -
                <InputField
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
