import React, { useState } from 'react';
import { SectionTitle, Wrapper, InputLocal, ButtonWrapper } from './OrderForm.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { CgUserList } from 'react-icons/cg';
import { Button } from 'components/atoms/Button/Button';

const initialOrderData = {
    name: ``,
    street: '',
    zipCode: '',
    place: '',
    email: '',
    phone: '',
};

const OrderForm = () => {
    const [orderData, setOrderData] = useState(initialOrderData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setOrderData((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const setData = (event) => {
        console.log(orderData);
        event.preventDefault();
    };

    return (
        <>
            ``
            <SectionTitle>
                <SectionDescription title={'Dane Odbiorcy'} icon={<CgUserList />} />
            </SectionTitle>
            <Wrapper>
                <form onSubmit={setData}>
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.name}
                        name="name"
                        placeholder="Imie i nazwisko lub nazwa firmy"
                    />
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.street}
                        name="street"
                        placeholder="Ulica i numer"
                    />
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.zipCode}
                        name="zipCode"
                        placeholder="Kod pocztowy"
                    />
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.place}
                        name="place"
                        placeholder="Miejscowosc"
                    />
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.email}
                        name="email"
                        placeholder="E-mail"
                    />
                    <InputLocal
                        onChange={handleInputChange}
                        value={orderData.phone}
                        name="phone"
                        placeholder="Telefon"
                    />
                    <ButtonWrapper>
                        <Button type="submit"> Zapisz </Button>
                    </ButtonWrapper>
                </form>
            </Wrapper>
        </>
    );
};

export default OrderForm;
