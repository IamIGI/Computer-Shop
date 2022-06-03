import React, { useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection } from './PopUpAccountSettiings.style';

const PopUpAccountSettings = ({ name, value }) => {
    const [inputValue, setInput] = useState('');

    function handleChangesInput(event) {
        const newInput = event.target.value;
        return setInput(newInput);
    }

    return (
        <>
            <Wrapper>
                <Title>
                    <h3>
                        <span> Edytuj:</span> {name}
                    </h3>
                </Title>
                <FormSection>
                    <form
                        onSubmit={(event) => {
                            setInput('');
                            event.preventDefault();
                        }}
                    >
                        <div>
                            <InputLocal onChange={handleChangesInput} name="name" placeholder={value} />
                        </div>
                        <div>
                            <InputLocal
                                onChange={handleChangesInput}
                                name="password"
                                placeholder="Podaj hasło aby zatwierdzić"
                                type="password"
                            />
                        </div>
                        <div>
                            <ButtonLocal type="submit">Zapisz</ButtonLocal>
                        </div>
                    </form>
                </FormSection>
            </Wrapper>
        </>
    );
};

export default PopUpAccountSettings;
