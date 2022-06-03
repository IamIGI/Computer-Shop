import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import React, { useState } from 'react';
import { Wrapper, SectionTitle, LabelArea, SectionChange, CheckboxLocal } from './AccountEntitlements.style';
import { GiStamper } from 'react-icons/gi';
import { Button } from 'components/atoms/Button/Button';

const initialConsentValue = {
    offers: false,
    sms: false,
    phone: false,
    matched: false,
};

const AccountEntitlements = () => {
    const [checkboxs, setCheckboxs] = useState(initialConsentValue);

    const handleCheckboxChange = (event) => {
        const { name } = event.target;

        setCheckboxs((prevValue) => {
            return {
                ...prevValue,
                [name]: !prevValue[name],
            };
        });
    };

    const setChanges = (event) => {
        console.log(checkboxs);
        event.preventDefault(); //do not refresh website
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Zgody'} icon={<GiStamper />} />
            </SectionTitle>
            <Wrapper>
                <form onSubmit={setChanges}>
                    <SectionChange>
                        <CheckboxLocal
                            type="checkbox"
                            name="offers"
                            value={checkboxs.offers}
                            onChange={handleCheckboxChange}
                        />
                        <LabelArea>
                            Chcę otrzymywać informacje o aktualnych ofertach oraz promocjach w wiadomości e‑mail
                        </LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal
                            type="checkbox"
                            name="sms"
                            value={checkboxs.sms}
                            onChange={handleCheckboxChange}
                        />
                        <LabelArea>Chcę otrzymywać wiadomości SMS.</LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal
                            type="checkbox"
                            name="phone"
                            value={checkboxs.phone}
                            onChange={handleCheckboxChange}
                        />
                        <LabelArea>Chcę otrzymywać informacje telefonicznie</LabelArea>
                    </SectionChange>
                    <SectionChange>
                        <CheckboxLocal
                            type="checkbox"
                            name="matched"
                            value={checkboxs.matched}
                            onChange={handleCheckboxChange}
                        />
                        <LabelArea>Chcę otrzymywać ofertę dopasowaną do moich potrzeb</LabelArea>
                    </SectionChange>
                    <Button>Zapisz Zgody</Button>
                </form>
            </Wrapper>
        </>
    );
};

export default AccountEntitlements;
