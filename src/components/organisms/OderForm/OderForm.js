import React, { useEffect, useState } from 'react';
import { SectionTitle, Wrapper, InputLocal, ButtonWrapper } from './OrderForm.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { CgUserList } from 'react-icons/cg';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { recipientDetails } from 'data/FormSchema';

const OrderForm = ({ setOrderData }) => {
    //form logic
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(recipientDetails),
    });

    const onSubmit = (data) => {
        setOrderData({
            name: data.name,
            street: data.street,
            zipCode: data.zipCode,
            place: data.place,
            email: data.email,
            phone: data.phone,
        });
        reset({ name: '', street: '', zipCode: '', place: '', email: '', phone: '' });
    };

    return (
        <>
            ``
            <SectionTitle>
                <SectionDescription title={'Dane Odbiorcy'} icon={<CgUserList />} />
            </SectionTitle>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputLocal name="name" placeholder="Imie i nazwisko lub nazwa firmy" {...register('name')} />
                    <p>{errors.name && 'Uzupełnij pole'}</p>
                    <InputLocal name="street" placeholder="Ulica i numer" {...register('street')} />
                    <p>{errors.street && 'Uzupełnij pole'}</p>
                    <InputLocal name="zipCode" placeholder="Kod pocztowy" {...register('zipCode')} />
                    <p>{errors.zipCode && 'Uzupełnij pole'}</p>
                    <InputLocal name="place" placeholder="Miejscowosc" {...register('place')} />
                    <p>{errors.place && 'Uzupełnij pole'}</p>
                    <InputLocal name="email" placeholder="E-mail" {...register('email')} />
                    <p>{errors.email && 'Wpisz poprawny adres email'}</p>
                    <InputLocal name="phone" placeholder="Telefon" {...register('phone')} />
                    <p>{errors.phone && 'Numer niepoprawny'}</p>
                    <ButtonWrapper>
                        <Button type="submit"> Zapisz </Button>
                    </ButtonWrapper>
                </form>
            </Wrapper>
        </>
    );
};

export default OrderForm;
