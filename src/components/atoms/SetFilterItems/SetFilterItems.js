import { useEffect, useState } from 'react';
import {
    ApproveButton,
    Checkbox,
    FilterOption,
    FilterOptions,
    InputDescription,
    InputField,
    InputSection,
    OptionDescription,
    SmallScreen,
    Wrapper,
} from './SetFilterItems.style';

const SetFilterItems = ({
    width,
    description,
    filterData,
    handleProducers,
    handleClearProducersFilters,
    clearProducers,
}) => {
    const [toggle, setToggle] = useState(false);
    const [check, setCheck] = useState(filterData);
    const [quantity, setQuantity] = useState(0);

    const handleCheck = (key, value) => {
        setCheck((prevValues) =>
            prevValues.map((obj) => {
                if (obj.value === key) {
                    return { ...obj, checked: !value };
                }
                return obj;
            })
        );
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked) ++count;
        }
        setQuantity(count);
        handleProducers(check);

        if (clearProducers) {
            handleClearProducersFilters(false);
            setCheck(filterData);
            handleProducers(check);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check, clearProducers]);

    return (
        <Wrapper>
            <InputSection>
                <InputField
                    width={width}
                    placeholder="Wybierz"
                    onClick={() => {
                        setToggle(true);
                    }}
                />
                <InputDescription>
                    {description} {quantity !== 0 && `(${quantity})`}
                </InputDescription>
                <FilterOptions display={toggle} width={width} onMouseLeave={() => setToggle(false)}>
                    {check.map((item) => (
                        <FilterOption key={item.label} onClick={() => handleCheck(item.value, item.checked)}>
                            <Checkbox type="checkbox" checked={item.checked} readOnly={true} />
                            <OptionDescription>{item.label}</OptionDescription>
                        </FilterOption>
                    ))}
                    <SmallScreen onClick={() => setToggle(false)}>
                        <ApproveButton>Zatwierdź</ApproveButton>
                    </SmallScreen>
                </FilterOptions>
            </InputSection>
        </Wrapper>
    );
};

export default SetFilterItems;
