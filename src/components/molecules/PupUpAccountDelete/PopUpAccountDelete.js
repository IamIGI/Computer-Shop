import React, { useState } from 'react';
import { ButtonLocal, InputLocal, Title, Wrapper, FormSection } from './PopUpAccountDelete.style';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountSettingsDelete } from 'data/FormSchema';

const baseURL = `http://localhost:5000/userSettingsDelete`;
let schema = '';
let viewedName = '';

const PopUpAccountDelete = ({ name }) => {
    const [passwordDiff, setPasswordDiff] = useState(false);

    switch (name) {
        case 'DeleteAccount':
            viewedName = 'Usuwanie konta';
            schema = accountSettingsDelete;
            break;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ password, confirmPassword }) => {
        console.log(password, confirmPassword);
        if (password === confirmPassword) {
            axios
                .post(baseURL, {
                    email: 'igorigi1998@gmail.com',
                    hashedPassword: password,
                })
                .then(({ data }) => {
                    console.log(data);
                })
                .catch((err) => console.log(err));

            setPasswordDiff(false);
        } else {
            setPasswordDiff(true);
        }
    };

    return (
        <>
            <Wrapper>
                <Title>
                    <h3>
                        <span> Uwaga: </span> {viewedName}
                    </h3>
                </Title>
                <FormSection>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputLocal name="name" placeholder="hasło" {...register('password')} />
                        </div>
                        <div>
                            <InputLocal name="password" placeholder="Podaj hasło ponownie" type="password" {...register('confirmPassword')} />
                        </div>
                        <p>{errors.password && 'Hasło min:4 max:15 znaków'}</p>
                        <p>{passwordDiff && 'Hasła nie są takie same'}</p>
                        <div>
                            <ButtonLocal type="submit">Usuń</ButtonLocal>
                        </div>
                    </form>
                </FormSection>
            </Wrapper>
        </>
    );
};

export default PopUpAccountDelete;
