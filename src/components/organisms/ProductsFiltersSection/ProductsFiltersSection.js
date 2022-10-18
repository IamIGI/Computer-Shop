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
} from './ProductsFiltersSection.style';
import { SelectStyle } from 'components/atoms/SelectStyle/SelectStyle';
import { Button } from 'components/atoms/Button/Button';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';

const ProductsFiltersSection = ({ handleFilters }) => {
    const [sortBy, setSortBy] = useState('none');
    const [producers, setProducers] = useState([]);
    const [clearProducers, setClearProducers] = useState(false);
    const [processors, setProcessors] = useState([]);
    const [clearProcessors, setClearProcessors] = useState(false);
    const [ram, setRam] = useState({ min: '', max: '' });
    const [disk, setDisk] = useState({ min: '', max: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [discounts, setDiscounts] = useState(false);

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
        <Wrapper>
            <SearchSection>
                <SearchField
                    placeholder="Czego szukasz?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    // onKeyDown={handleKeyDown}
                />
                <SearchDescription>Wyszukiwanie</SearchDescription>
            </SearchSection>
            <SelectStyle width="250px">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    {filterOptions.map((option, index) => (
                        <option value={option.value} key={index}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </SelectStyle>
            <Title>Status</Title>
            <DiscountFilter>
                <DiscountCheckbox type="checkbox" onChange={() => handleDiscount()} checked={discounts} />
                <DiscountDesc onClick={() => handleDiscount()}>Promocje</DiscountDesc>
            </DiscountFilter>

            <SetFilterItems
                width="250px"
                description={'Produkty'}
                filterData={Producers}
                handleProducers={handleProducers}
                handleClearProducersFilters={handleClearProducersFilters}
                clearProducers={clearProducers}
            />

            <SetFilterItems
                width="250px"
                description={'Procesory'}
                filterData={Processors}
                handleProducers={handleProcessors}
                handleClearProducersFilters={handleClearProcessorsFilters}
                clearProducers={clearProcessors}
            />

            {/* <FilterProcessors data={processors[0]} filterData={Processors} handleProcessors={handleProcessors} /> */}
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
            <Button onClick={() => clearFilters()}>Wyczyść filtry</Button>
        </Wrapper>
    );
};

export default ProductsFiltersSection;
