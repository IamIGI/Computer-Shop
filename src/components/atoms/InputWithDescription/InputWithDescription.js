import React from 'react';
import { InputSection, InputDescription, InputField } from './InputWithDescription.style';

const InputWithDescription = ({ value, handleInput, placeholder, description, type = 'search' }) => {
    return (
        <InputSection>
            <InputField
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => handleInput(e.target.value)}
            />
            <InputDescription>{description}</InputDescription>
        </InputSection>
    );
};

export default InputWithDescription;
