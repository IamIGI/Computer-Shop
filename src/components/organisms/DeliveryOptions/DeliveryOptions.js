import React, { useState } from 'react';
import { Wrapper, Section, CheckboxLocal, Description, Icon, SectionTitle } from './DeliveryOptions.style';
import { BsTruck, BsInboxes } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { MdOutlineDeliveryDining } from 'react-icons/md';

const initDeliveryCheckboxes = { deliveryMan: false, atTheSalon: false, locker: false };

const DeliveryOptions = () => {
    const [deliveryCheckboxes, setDeliveryCheckboxes] = useState(initDeliveryCheckboxes);

    const setState = ({ target }) => {
        let setValue = '';
        const { name } = target;
        if (deliveryCheckboxes[name] === true) {
            setValue = false;
            console.log('here');
        } else {
            setValue = true;
        }
        setDeliveryCheckboxes(() => {
            return { ...initDeliveryCheckboxes, [name]: setValue };
        });
    };

    console.log(deliveryCheckboxes);

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Sposób dostawy'} icon={<MdOutlineDeliveryDining />} />
            </SectionTitle>
            <Wrapper>
                <Section>
                    <CheckboxLocal type="checkbox" name="deliveryMan" checked={deliveryCheckboxes.deliveryMan} onClick={setState} />
                    <Description>
                        <h4>Kurier – InPost, UPS, FedEx, DTS bezpłatnie</h4>
                        <p>Zamówienie dostaniesz: wtorek, 7.06</p>
                    </Description>
                    <Icon>
                        <BsTruck />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal type="checkbox" name="atTheSalon" checked={deliveryCheckboxes.atTheSalon} onChange={setState} />
                    <Description>
                        <h4>Odbiór w salonie HotShoot</h4>
                        <p>Aktualna możliwośc odbioru, tylko: Kraków, ul. Czarnowiejska 66 Budynek B5</p>
                    </Description>
                    <Icon>
                        <FaRegBuilding />
                    </Icon>
                </Section>
                <Section>
                    <CheckboxLocal type="checkbox" name="locker" checked={deliveryCheckboxes.locker} onChange={setState} />
                    <Description>
                        <h4>Paczkomat 24/7</h4>
                        <p>Aktualna możliwośc odbioru, tylko: Paczkomat KRA35A Reymonta 17 Kraków</p>
                    </Description>
                    <Icon>
                        <BsInboxes />
                    </Icon>
                </Section>
            </Wrapper>
        </>
    );
};

export default DeliveryOptions;
