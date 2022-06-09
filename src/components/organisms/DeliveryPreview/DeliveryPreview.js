import React from 'react';
import { Description, Icon, Section, Wrapper } from './DeliveryPreview.style';
import { BsTruck, BsBoxSeam } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa';

const DeliveryPreview = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <Icon>
                        <BsTruck />
                    </Icon>
                    <Description>
                        <h5>Sposób dostawy:</h5>
                        <p>Kurier-InPost,UPS,FedEX, DTS</p>
                    </Description>
                </Section>
                <Section>
                    <Icon>
                        <FaCashRegister />
                    </Icon>
                    <Description>
                        <h5>Sposób płatności:</h5>
                        <p>Płatnośc Online</p>
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
