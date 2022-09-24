import { useEffect, useState } from 'react';
import { Producers, Processors, filterOptions } from 'data/ProductsFilters';
import FilterProcessors from 'components/atoms/FilterProcessors/FilterProcessors';
import FilterProducers from 'components/atoms/FilterProducers/FilterProducers';
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
} from './ProductsFiltersSection.style';
import { SelectStyle } from 'components/atoms/SelectStyle/SelectStyle';
import { Button } from 'components/atoms/Button/Button';

const ProductsFiltersSection = ({ handleFilters }) => {
    const [sortBy, setSortBy] = useState('none');
    const [producers, setProducers] = useState([]);
    const [processors, setProcessors] = useState([]);
    const [ram, setRam] = useState({ min: '', max: '' });
    const [disk, setDisk] = useState({ min: '', max: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [discounts, setDiscounts] = useState(false);
    const [refreshSearchTerm, setRefreshSearchTerm] = useState(false);
    let processorsArray = [];

    const handleProducers = (data) => {
        setProducers([data]);
    };
    const handleProcessors = (data) => {
        setProcessors([data]);
    };

    const handleDiscount = () => {
        setDiscounts(!discounts);
    };

    const clearFilters = () => {
        setProcessors([]);
        setProducers([]);
        setRam({ min: '', max: '' });
        setDisk({ min: '', max: '' });
        setSortBy('none');
        setSearchTerm('');
    };

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         setRefreshSearchTerm(!refreshSearchTerm);
    //     }
    // };

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
        //check for cpu
        processors[0] === undefined && (processors[0] = []);
        for (let i = 0; i < processors[0].length; i++) {
            let filteredCPU = processors[0][i];
            for (let j = 0; j < Processors.filters_extended.length; j++) {
                let checkedCPU = Processors.filters_extended[j];
                if (filteredCPU == checkedCPU.label) {
                    processorsArray.push(checkedCPU.value);
                    break;
                }
            }
        }
        producers[0] === undefined && (producers[0] = []);
        let productFilters = {
            searchTerm,
            filters: {
                discounts,
                producers: producers[0],
                processors: processorsArray,
                ram,
                disk,
            },
            sortBy,
        };
        setTimeout(() => {
            handleFilters(productFilters);
        }, 500);
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
            <FilterProducers data={producers[0]} filterData={Producers} handleProducers={handleProducers} />
            <FilterProcessors data={processors[0]} filterData={Processors} handleProcessors={handleProcessors} />
            <Title>RAM</Title>
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
            <Title>Dysk</Title>
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
            <Button onClick={() => clearFilters()}>Wyczyść filtry</Button>
        </Wrapper>
    );
};

export default ProductsFiltersSection;
