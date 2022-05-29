import React, { useState } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import styled from 'styled-components';

const WrapButton = styled(Button)`
    margin-left: 15px;
    padding: 10px;
`;

function LoginArea(props) {
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
        <div>
            <form
                className="create-note"
                onSubmit={(event) => {
                    setInput('');
                    event.preventDefault();
                }}
            >
                {isExpanded === 'false' && <Button onClick={expand}> Logowanie </Button>}
                {isExpanded === 'true' && (
                    <>
                        <Input onChange={handleChangesInput} value={inputValue} name="email" placeholder="E-mail" />
                        <Input
                            onChange={handleChangesInput}
                            value={inputValue}
                            name="password"
                            placeholder="Hasło"
                            type="password"
                        />
                        <Button type="submit"> Zaloguj sie </Button>

                        <WrapButton onClick={expand}>
                            <BsFillCaretUpFill />
                        </WrapButton>
                    </>
                )}
            </form>
        </div>
    );
}

export default LoginArea;
