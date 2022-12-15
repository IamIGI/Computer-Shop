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
    handleItems,
    clearItems,
    handleClearItems,
    OneTimeChoice = false,
    displayCheckbox = false,
    selectOptionsInCenter = false,
    afterClickWrap = false,
    showConfirmButtonOnSmallScreen = false,
    handleReset,
    reset,
}) => {
    const [toggle, setToggle] = useState(false);
    const [check, setCheck] = useState(filterData);
    const [quantity, setQuantity] = useState(0);
    const [placeholder, setPlaceHolder] = useState(OneTimeChoice ? filterData[0].label : '');

    useEffect(() => {
        if (reset) {
            setCheck(filterData);
            setPlaceHolder(filterData[0].label);
            handleReset(false);
        }
    }, [reset]);

    const handleCheck = (key, value) => {
        if (!OneTimeChoice) {
            setCheck((prevValues) =>
                prevValues.map((obj) => {
                    if (obj.value === key) {
                        return { ...obj, checked: !value };
                    }
                    return obj;
                })
            );
        } else {
            setCheck(
                filterData.map((obj) => {
                    if (obj.value === key) {
                        setPlaceHolder(obj.label);
                        return { ...obj, checked: !value };
                    }
                    return obj;
                })
            );
        }

        if (afterClickWrap) setToggle(false);
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked) ++count;
        }
        setQuantity(count);
        handleItems(check);

        if (clearItems) {
            setCheck(filterData);
            handleItems(check);
            handleClearItems();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [check, clearItems]);

    return (
        <Wrapper>
            <InputSection>
                <InputField
                    display={toggle ? 'true' : undefined}
                    width={width}
                    placeholder={OneTimeChoice ? placeholder : 'Wybierz'}
                    onClick={() => {
                        setToggle(true);
                    }}
                />
                <InputDescription>
                    {description} {!OneTimeChoice && quantity !== 0 && `(${quantity})`}
                </InputDescription>
                <FilterOptions
                    display={toggle ? 'true' : undefined}
                    width={width}
                    onMouseLeave={() => setToggle(false)}
                >
                    {check.map((item) => (
                        <FilterOption
                            activeChoice={item.checked}
                            selectOptionsInCenter={selectOptionsInCenter}
                            key={item.label}
                            onClick={() => handleCheck(item.value, item.checked)}
                        >
                            {displayCheckbox && <Checkbox type="checkbox" checked={item.checked} readOnly={true} />}
                            <OptionDescription>{item.label}</OptionDescription>
                        </FilterOption>
                    ))}
                    <SmallScreen
                        showConfirmButtonOnSmallScreen={showConfirmButtonOnSmallScreen}
                        onClick={() => setToggle(false)}
                    >
                        <ApproveButton>Zatwierdź</ApproveButton>
                    </SmallScreen>
                </FilterOptions>
            </InputSection>
        </Wrapper>
    );
};

export default SetFilterItems;
