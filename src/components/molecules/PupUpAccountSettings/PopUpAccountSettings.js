import React, { useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection } from './PopUpAccountSettiings.style';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountSettingsEmail, accountSettingsStringField, accountSettingsPassword } from 'data/FormSchema';

const baseURL = `http://localhost:5000/userSettingsData`;

const PopUpAccountSettings = ({ name, value }) => {
    let schema = '';
    let viewedName = '';
    const [inputValue, setInput] = useState('');

    function handleChangesInput(event) {
        const newInput = event.target.value;
        return setInput(newInput);
    }

    switch (name) {
        case 'firstName':
            viewedName = 'Imie';
            schema = accountSettingsStringField;
            break;
        case 'lastName':
            viewedName = 'Nazwisko';
            schema = accountSettingsStringField;
            break;
        case 'email':
            viewedName = 'E-mail';
            schema = accountSettingsEmail;
            break;
        case 'hashedPassword':
            viewedName = 'Hasło';
            schema = accountSettingsPassword;
            break;
        default:
            break;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ editedField, password }) => {
        console.log(editedField, password);
        axios
            .post(baseURL, {
                fieldName: name,
                email: 'igorigi1998@gmail.com',
                edited: editedField,
                hashedPassword: password,
            })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Wrapper>
                <Title>
                    <h3>
                        <span> Edytuj:</span> {viewedName}
                    </h3>
                </Title>
                <FormSection>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputLocal
                                onChange={handleChangesInput}
                                name="name"
                                placeholder={value}
                                {...register('editedField')}
                            />
                        </div>
                        <p>{errors.editedField && 'Niepoprawny dane'}</p>
                        <div>
                            <InputLocal
                                onChange={handleChangesInput}
                                name="password"
                                placeholder="Podaj hasło aby zatwierdzić"
                                type="password"
                                {...register('password')}
                            />
                        </div>
                        <p>{errors.password && 'Złe hasło'}</p>
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
