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

const ProductsFiltersSection = ({ handleFilters, position, handleShowFilters, FilterInitPosition }) => {
    const [sortBy, setSortBy] = useState('none');
    const [producers, setProducers] = useState([]);
    const [processors, setProcessors] = useState([]);
    const [ram, setRam] = useState({ min: '', max: '' });
    const [disk, setDisk] = useState({ min: '', max: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [discounts, setDiscounts] = useState(false);

    const [clearSortBy, setClearSortBy] = useState(false);
    const [clearProducers, setClearProducers] = useState(false);
    const [clearProcessors, setClearProcessors] = useState(false);

    const handleSortBy = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                setSortBy(data[i].value);
                break;
            }
        }
    };

    const handleClearSortByFilters = (data) => {
        setSortBy('date');
        setClearSortBy(data);
    };

    const handleProducers = (data) => {
        let productList = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) productList.push(data[i].value);
        }
        setProducers(productList);
    };

    const handleProcessors = (data) => {
        let processorsList = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) processorsList.push(data[i].value);
        }
        setProcessors(processorsList);
    };

    const handleDiscount = () => {
        setDiscounts(!discounts);
    };

    const handleClearProducersFilters = (data) => {
        setClearProducers(data);
    };
    const handleClearProcessorsFilters = (data) => {
        setClearProcessors(data);
    };

    const clearFilters = () => {
        setProcessors([]);
        setProducers([]);
        setRam({ min: '', max: '' });
        setDisk({ min: '', max: '' });
        setSortBy('none');
        setSearchTerm('');
        handleClearProducersFilters(true);
        handleClearProcessorsFilters(true);
    };

    const handleInput = (inputName, key, data) => {
        const changeMinMaxValue = (inputName, key, data) => {
            if (inputName === 'ram') {
                setRam((prevValue) => {
                    return {
                        ...prevValue,
                        [key]: data,
                    };
                });
            } else {
                setDisk((prevValue) => {
                    return {
                        ...prevValue,
                        [key]: data,
                    };
                });
            }
        };

        if (!isNaN(data)) changeMinMaxValue(inputName, key, data);
    };

    useEffect(() => {
        let productFilters = {
            searchTerm,
            filters: {
                discounts,
                producers,
                processors,
                ram,
                disk,
            },
            sortBy,
        };
        setTimeout(() => {
            handleFilters(productFilters);
        }, 500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy, producers, processors, ram, disk, searchTerm, discounts]);

    return (
        <Wrapper position={position} onMouseLeave={() => handleShowFilters(FilterInitPosition)}>
            <SearchSection>
                <SearchField
                    placeholder="Czego szukasz?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchDescription>Wyszukiwanie</SearchDescription>
            </SearchSection>

            <SetFilterItems
                OneTimeChoice={true}
                width="250px"
                description={'Sortuj'}
                filterData={filterOptions}
                handleItems={handleSortBy}
                handleClearItemsFilters={handleClearSortByFilters}
                clearItems={clearSortBy}
            />

            <Title>Status</Title>
            <DiscountFilter>
                <DiscountCheckbox type="checkbox" onChange={() => handleDiscount()} checked={discounts} />
                <DiscountDesc onClick={() => handleDiscount()}>Promocje</DiscountDesc>
            </DiscountFilter>

            <SetFilterItems
                OneTimeChoice={false}
                width="250px"
                description={'Produkty'}
                filterData={Producers}
                handleItems={handleProducers}
                handleClearItemsFilters={handleClearProducersFilters}
                clearItems={clearProducers}
            />

            <SetFilterItems
                OneTimeChoice={false}
                width="250px"
                description={'Procesory'}
                filterData={Processors}
                handleItems={handleProcessors}
                handleClearItemsFilters={handleClearProcessorsFilters}
                clearItems={clearProcessors}
            />

            <Title>RAM</Title>
            <FilterVerticalSection>
                <InputField
                    onChange={(e) => handleInput('ram', 'min', e.target.value)}
                    value={ram.min}
                    placeholder="od GB"
                />{' '}
                -
                <InputField
                    onChange={(e) => handleInput('ram', 'max', e.target.value)}
                    value={ram.max}
                    placeholder="do GB"
                />
            </FilterVerticalSection>
            <Title>Dysk</Title>
            <FilterVerticalSection>
                <InputField
                    onChange={(e) => handleInput('disk', 'min', e.target.value)}
                    value={disk.min}
                    placeholder="od GB"
                />{' '}
                -
                <InputField
                    onChange={(e) => handleInput('disk', 'max', e.target.value)}
                    value={disk.max}
                    placeholder="do GB"
                />
            </FilterVerticalSection>
            <Margin>
                <Button onClick={() => clearFilters()}>Wyczyść filtry</Button>
            </Margin>
            <SmallScreenSize>
                <Button onClick={() => handleShowFilters(FilterInitPosition)}>Zapisz / Schowaj</Button>
            </SmallScreenSize>
        </Wrapper>
    );
};

export default ProductsFiltersSection;
