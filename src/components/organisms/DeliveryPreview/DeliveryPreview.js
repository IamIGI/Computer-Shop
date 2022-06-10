import React from 'react';
import { Description, Icon, Section, Wrapper } from './DeliveryPreview.style';
import { BsTruck, BsBoxSeam } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa';

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
            deliveryDescriptionOpt = 'Płatność online';
            break;
        case 'atTheSalon':
            deliveryDescriptionOpt = 'Karta płatnicza online';
            break;
        case 'locker':
            deliveryDescriptionOpt = 'Przelew gotówkowy';
            break;

        default:
            deliveryDescriptionOpt = 'Wybierz metodę dostawy';
            break;
    }

    return deliveryDescriptionOpt;
};

const DeliveryPreview = ({ deliveryCheckboxesPay, deliveryCheckboxesOpt }) => {
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
                        <BsBoxSeam />
                    </Icon>
                    <Description>
                        <h5>Zamówienie dostaniesz:</h5>
                        <p>pojutrze, 7.06</p>
                    </Description>
                </Section>
            </Wrapper>
        </>
    );
};

export default DeliveryPreview;
