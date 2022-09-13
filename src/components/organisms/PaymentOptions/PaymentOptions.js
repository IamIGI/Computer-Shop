import React, { useState } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { CheckboxLocal, Description, Icon, Section, SectionTitle, Wrapper } from './PaymentOptions.style';
import { HiStatusOnline } from 'react-icons/hi';
import { RiVisaLine } from 'react-icons/ri';
import { BsCashCoin, BsWallet2, BsPiggyBank } from 'react-icons/bs';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';

const PaymentOptions = ({ initDeliveryCheckboxesPay, deliveryCheckboxesPay, setDeliveryCheckboxesPay }) => {
    const setState = ({ target }) => {
        let setValue = '';
        const { name } = target;
        if (deliveryCheckboxesPay[name]) {
            setValue = false;
        } else {
            setValue = true;
        }

        setDeliveryCheckboxesPay(() => {
            return { ...initDeliveryCheckboxesPay, [name]: setValue };
        });
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Sposób płatności'} icon={<MdOutlinePayment />} />
            </SectionTitle>
            <Wrapper>
                <Section>
                    <CheckboxLocal
                        type="checkbox"
                        name="online"
                        checked={deliveryCheckboxesPay.online}
                        onClick={setState}
                    />
                    <Description>
                        <h4>
                            Płatność online <span>(bezpłatnie)</span>{' '}
                        </h4>
                    </Description>
                    <Icon>
                        <HiStatusOnline />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal
                        type="checkbox"
                        name="card"
                        checked={deliveryCheckboxesPay.card}
                        onClick={setState}
                    />
                    <Description>
                        <h4>
                            Karta płatnicza online <span>(bezpłatnie)</span>
                        </h4>
                    </Description>
                    <Icon>
                        <RiVisaLine />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal
                        type="checkbox"
                        name="cash"
                        checked={deliveryCheckboxesPay.cash}
                        onClick={setState}
                    />
                    <Description>
                        <h4>Przelew gotówkowy</h4>
                    </Description>
                    <Icon>
                        <BsCashCoin />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal
                        type="checkbox"
                        name="uponReceipt"
                        checked={deliveryCheckboxesPay.uponReceipt}
                        onClick={setState}
                    />
                    <Description>
                        <h4>Przy odbiorze</h4>
                    </Description>
                    <Icon>
                        <BsWallet2 />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal
                        type="checkbox"
                        name="installment"
                        checked={deliveryCheckboxesPay.installment}
                        onClick={setState}
                    />
                    <Description>
                        <h4>Raty</h4>
                    </Description>
                    <Icon>
                        <BsPiggyBank />
                    </Icon>
                </Section>
            </Wrapper>
        </>
    );
};

export default PaymentOptions;
