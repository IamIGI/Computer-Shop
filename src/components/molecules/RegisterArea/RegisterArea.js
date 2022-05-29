import React, { useState } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import styled from 'styled-components';
import { Bottom } from 'components/templates/AllProducts/AllProducts.styles';
import { BsFillCaretUpFill } from 'react-icons/bs';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const BottomRegister = styled(Bottom)`
    justify-content: center;

    p {
        font-size: ${({ theme }) => theme.fontSize.m};
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

const WrapButton = styled(Button)`
    margin-left: 15px;
    padding: 10px;
`;

function RegisterArea(props) {
    const [isExpanded, setExpanded] = useState('false');
    const [inputValue, setInput] = useState('');

    function expand() {
        isExpanded === 'false' ? setExpanded('true') : setExpanded('false');
    }

    function handleChangesInput(event) {
        const newInput = event.target.value;
        return setInput(newInput);
    }

    return (
        <Wrapper>
            <form
                className="create-note"
                onSubmit={(event) => {
                    setInput('');
                    event.preventDefault();
                }}
            >
                {isExpanded === 'false' && <Button onClick={expand}> Rejestracja </Button>}
                {isExpanded === 'true' && (
                    <>
                        <Input
                            onChange={handleChangesInput}
                            value={inputValue}
                            name="name"
                            placeholder="Imię (wymagane)"
                        />
                        <Input
                            onChange={handleChangesInput}
                            value={inputValue}
                            name="forname"
                            placeholder="Nazwisko (wymagane)"
                        />
                        <Input
                            onChange={handleChangesInput}
                            value={inputValue}
                            name="email"
                            placeholder="Email (wymagane)"
                        />
                        <Input
                            onChange={handleChangesInput}
                            value={inputValue}
                            name="password"
                            placeholder="Hasło (wymagane)"
                            type="password"
                        />
                        <BottomRegister>
                            <Checkbox onChange={handleChangesInput} value={inputValue} type="checkbox" />
                            <p>Akceptuj regulamin sklepu</p>
                        </BottomRegister>

                        <Button type="submit"> Załóż konto! </Button>
                        <WrapButton onClick={expand}>
                            <BsFillCaretUpFill />
                        </WrapButton>
                    </>
                )}
            </form>
        </Wrapper>
    );
}

export default RegisterArea;
