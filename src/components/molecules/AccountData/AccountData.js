import React, { useState } from 'react';
import { ButtonLocal, InputLocal, LabelArea, SectionChange, SectionTitle, Wrapper } from './AccountData.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiSettings } from 'react-icons/fi';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAccountSettings from '../PupUpAccountSettings/PopUpAccountSettings';

const AccountData = () => {
    const [inputValue, setInput] = useState({
        name: 'Igor',
        forname: 'Kwiatkowski',
        email: 'igorigi1998@gmail.com',
        password: '12345',
    });
    const [isOpen, setIsOpen] = useState([false, { DataName: '', value: '' }]);

    function handleChangesInput(event) {
        const newInput = event.target.value;
        return setInput(newInput);
    }

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Ustawienia'} icon={<FiSettings />} />
            </SectionTitle>

            <Wrapper>
                <div>
                    <h3>Dane konta</h3>
                </div>
                <SectionChange>
                    <LabelArea>Imię</LabelArea>
                    <InputLocal onChange={handleChangesInput} value={inputValue.name} name="name" disabled="true" />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'Imie', value: inputValue.name }])}>Zmień</ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Nazwisko</LabelArea>
                    <InputLocal onChange={handleChangesInput} value={inputValue.forname} name="forname" disabled="true" />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'Nazwisko', value: inputValue.forname }])}>Zmień</ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Email</LabelArea>
                    <InputLocal onChange={handleChangesInput} value={inputValue.email} name="email" disabled="true" />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'Email', value: inputValue.email }])}>Zmień</ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Hasło</LabelArea>
                    <InputLocal onChange={handleChangesInput} value={inputValue.password} name="password" type="password" disabled="true" />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'Hasło', value: inputValue.password }])}>Zmień</ButtonLocal>
                </SectionChange>

                <Modal open={isOpen} onClose={() => setIsOpen([false, {}])}>
                    <PopUpAccountSettings name={isOpen[1].DataName} value={isOpen[1].value} />
                </Modal>
            </Wrapper>
        </>
    );
};

export default AccountData;
