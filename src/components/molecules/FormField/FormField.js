import React from 'react';
import propTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${Label} {
        margin: 10px 0;
    }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text' }, ref) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input
                ref={ref}
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                data-testid={label}
                checked={value}
            />
        </Wrapper>
    );
});

FormField.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    type: propTypes.string,
};

export default FormField;
