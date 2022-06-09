import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import React from 'react';
import { Wrapper, SectionTitle, LabelArea, SectionChange, CheckboxLocal } from './AccountEntitlements.style';
import { GiStamper } from 'react-icons/gi';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountSettingsEnlistments } from 'data/FormSchema';
import axios from 'axios';

const baseURL = `http://localhost:5000/userSettingsEnlistments`;

const AccountEntitlements = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(accountSettingsEnlistments),
    });

    const onSubmit = (data) => {
        console.log(data);
        axios
            .post(baseURL, {
                accountEmail: 'wojak@gmail.com',
                email: data.email,
                sms: data.sms,
                phone: data.phone,
                adjustedOffers: data.adjustedOffers,
            })
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Zgody'} icon={<GiStamper />} />
            </SectionTitle>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SectionChange>
                        <CheckboxLocal type="checkbox" {...register('email')} />
                        <LabelArea>Chcę otrzymywać informacje o aktualnych ofertach oraz promocjach w wiadomości e‑mail</LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal type="checkbox" {...register('sms')} />
                        <LabelArea>Chcę otrzymywać wiadomości SMS.</LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal type="checkbox" {...register('phone')} />
                        <LabelArea>Chcę otrzymywać informacje telefonicznie</LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal type="checkbox" {...register('adjustedOffers')} />
                        <LabelArea>Chcę otrzymywać ofertę dopasowaną do moich potrzeb</LabelArea>
                    </SectionChange>
                    <Button type="submit">Zapisz Zgody</Button>
                </form>
            </Wrapper>
        </>
    );
};

export default AccountEntitlements;
