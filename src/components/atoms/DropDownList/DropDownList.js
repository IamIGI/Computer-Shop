import React from 'react';
import { DropDownList, Title } from './DropDownList.style';
import { useState } from 'react';

const DropDownCheckbox = ({ filterData }) => {
    console.log(filterData.filters);
    const [item, setItem] = useState(filterData.filters);
    return (
        <>
            <Title>{filterData.title}</Title>
            <DropDownList
                isObject={false}
                onRemove={(event) => {
                    console.log(event);
                }}
                onSelect={(event) => {
                    console.log(event);
                }}
                options={item}
                placeholder="Wybierz"
                // selectedValues={['Option 1', 'Option 2']}
                style={{
                    chips: {
                        // color: 'black',
                        background: '#fcb040',
                    },
                    multiselectContainer: {
                        color: '#737C8E',
                    },
                    searchBox: {
                        'padding-left': '20px',
                        'border-radius': '30px',
                    },
                    optionContainer: {
                        // To change css for option container
                        'margin-left': '5%',
                        width: '90%',
                        border: '1px solid',
                        'border-radius': '5px',
                    },
                }}
            />
        </>
    );
};

export default DropDownCheckbox;
