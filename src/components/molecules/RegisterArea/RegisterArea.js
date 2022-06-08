import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';
import { WrapButton, Wrapper, BottomRegister } from './RegisterArea.style';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'data/FormSchema';
import axios from 'axios';

const baseURL = `http://localhost:5000/register`;

function RegisterArea(props) {
    const [isExpanded, setExpanded] = useState('false');
    const [emailStatus, setEmailStatus] = useState(false); //100 - okey, 101 - emailTaken

    function expand() {
        isExpanded === 'false' ? setExpanded('true') : setExpanded('false');
    }

    //form logic
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = (data) => {
        axios
            .post(baseURL, {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                hashedPassword: data.password,
            })
            .then(({ data }) => {
                console.log(data);
                if (data === 101) {
                    // console.log('here');
                    setEmailStatus(true);
                } else {
                    setEmailStatus(false);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isExpanded === 'false' && <Button onClick={expand}> Rejestracja </Button>}
                {isExpanded === 'true' && (
                    <>
                        <Input placeholder="Imię (wymagane)" {...register('firstName')} />
                        <p>{errors.firstName && 'Uzupełnij pole: imie'}</p>
                        <Input placeholder="Nazwisko (wymagane)" {...register('lastName')} />
                        <p>{errors.lastName && 'Uzupełnij pole: Nazwisko'}</p>
                        <Input placeholder="E-mail (wymagane)" {...register('email')} />
                        <p>{errors.email && 'Niepoprawny Email'}</p>
                        <p>{emailStatus && 'Podany email jest już używany'}</p>
                        <Input placeholder="Hasło (wymagane)" {...register('password')} />
                        <p>{errors.password && 'min: 4 max: 5 chars'}</p>
                        <Input placeholder="Powtórz hasło (wymagane)" {...register('confirmPassword')} />
                        <p>{errors.confirmPassword && 'Hasła musza się powtarzać'}</p>

                        {/* <BottomRegister>
                            <Checkbox onChange={handleChangesInput} value={inputValue} type="checkbox" />
                            <p>Akceptuj regulamin sklepu</p>
                        </BottomRegister> */}

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
