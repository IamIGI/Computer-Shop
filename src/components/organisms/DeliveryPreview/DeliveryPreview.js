import React from 'react';
import { Description, Icon, Section, Wrapper } from './DeliveryPreview.style';
import { BsTruck, BsCalendarEvent } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';

const showPaymentMethod = (deliveryCheckboxesPay) => {
    let deliveryOptionPay = '';
    let deliveryDescriptionPay = '';

    Object.values(deliveryCheckboxesPay).map((x, index) => {
        if (x === true) {
            deliveryOptionPay = Object.keys(deliveryCheckboxesPay)[index];
        }
    });

    switch (deliveryOptionPay) {
        case 'online':
            deliveryDescriptionPay = 'Płatność online';
            break;
        case 'card':
            deliveryDescriptionPay = 'Karta płatnicza online';
            break;
        case 'cash':
            deliveryDescriptionPay = 'Przelew gotówkowy';
            break;
        case 'uponReceipt':
            deliveryDescriptionPay = 'Przy odbiorze';
            break;
        case 'installment':
            deliveryDescriptionPay = 'Raty';
            break;

        default:
            deliveryDescriptionPay = 'Wybierz metode płatności';
            break;
    }

    return deliveryDescriptionPay;
};

const showDeliveryMethod = (deliveryCheckboxesOpt) => {
    let deliveryOptionOpt = '';
    let deliveryDescriptionOpt = '';

    Object.values(deliveryCheckboxesOpt).map((x, index) => {
        if (x === true) {
            deliveryOptionOpt = Object.keys(deliveryCheckboxesOpt)[index];
        }
    });

    switch (deliveryOptionOpt) {
        case 'deliveryMan':
            deliveryDescriptionOpt = 'Kurier';
            break;
        case 'atTheSalon':
            deliveryDescriptionOpt = 'Odbiór w salonie';
            break;
        case 'locker':
            deliveryDescriptionOpt = 'Paczkomat 24/7';
            break;

        default:
            deliveryDescriptionOpt = 'Wybierz metodę dostawy';
            break;
    }

    return deliveryDescriptionOpt;
};

const DeliveryPreview = ({ deliveryCheckboxesPay, deliveryCheckboxesOpt, orderStreet }) => {
    let deliveryDescriptionPay = showPaymentMethod(deliveryCheckboxesPay);
    let deliveryDescriptionOpt = showDeliveryMethod(deliveryCheckboxesOpt);
    return (
        <>
            <Wrapper>
                <Section>
                    <Icon>
                        <BsTruck />
                    </Icon>
                    <Description>
                        <h5>Sposób dostawy:</h5>
                        <p>{deliveryDescriptionOpt}</p>
                    </Description>
                </Section>
                <Section>
                    <Icon>
                        <FaCashRegister />
                    </Icon>
                    <Description>
                        <h5>Sposób płatności:</h5>
                        <p>{deliveryDescriptionPay}</p>
                    </Description>
                </Section>
                <Section>
                    <Icon>
                        <GrHomeRounded />
                    </Icon>
                    <Description>
                        <h5>Miejsce dostarczenia:</h5>
                        {orderStreet === '' ? <p>Wypełnij formularz</p> : <p>{orderStreet}</p>}
                    </Description>
                </Section>
                <Section>
                    <Icon>
                        <BsCalendarEvent />
                    </Icon>
                    <Description>
                        <h5>Data dostarczenia:</h5>
                        <p>pojutrze, 7.06</p>
                    </Description>
                </Section>
            </Wrapper>
        </>
    );
};

export default DeliveryPreview;
