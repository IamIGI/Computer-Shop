import React, { useState } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { BsFillCaretUpFill } from 'react-icons/bs';
import { WrapButton } from './LoginArea.style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'data/FormSchema';
import axios from 'axios';

const baseURL = `http://localhost:5000/login`;

function LoginArea(props) {
    const [isExpanded, setExpanded] = useState('false');

    function expand() {
        isExpanded === 'false' ? setExpanded('true') : setExpanded('false');
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data) => {
        axios
            .post(baseURL, {
                email: data.email,
                hashedPassword: data.password,
            })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));

        reset({ email: '', password: '' });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {isExpanded === 'false' && <Button onClick={expand}> Logowanie </Button>}
                {isExpanded === 'true' && (
                    <>
                        <Input placeholder="E-mail (wymagane)" {...register('email')} />
                        <p>{errors.email && 'Niepoprawny Email'}</p>
                        <Input placeholder="Hasło (wymagane)" {...register('password')} />
                        <p>{errors.password && 'min: 4 max: 5 znaków'}</p>
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
