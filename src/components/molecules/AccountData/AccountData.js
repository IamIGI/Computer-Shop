import React, { useState } from 'react';
import { ButtonLocal, InputLocal, LabelArea, SectionChange, SectionTitle, Wrapper } from './AccountData.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiSettings } from 'react-icons/fi';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAccountSettings from '../PupUpAccountSettings/PopUpAccountSettings';

//You need to pass right email
const AccountData = () => {
    const [inputValue, setInput] = useState({
        name: 'Igor',
        lastName: 'Kwiatkowski',
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
                    <InputLocal
                        onChange={handleChangesInput}
                        value={inputValue.name}
                        name="firstName"
                        disabled="true"
                    />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'firstName', value: inputValue.name }])}>
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Nazwisko</LabelArea>
                    <InputLocal
                        onChange={handleChangesInput}
                        value={inputValue.lastName}
                        name="lastName"
                        disabled="true"
                    />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'lastName', value: inputValue.forname }])}>
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Email</LabelArea>
                    <InputLocal onChange={handleChangesInput} value={inputValue.email} name="email" disabled="true" />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'email', value: inputValue.email }])}>
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Hasło</LabelArea>
                    <InputLocal
                        onChange={handleChangesInput}
                        value={inputValue.password}
                        name="hashedPassword"
                        type="password"
                        disabled="true"
                    />
                    <ButtonLocal
                        onClick={() => setIsOpen([true, { DataName: 'hashedPassword', value: inputValue.password }])}
                    >
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <Modal position={[40, -80]} width={300} open={isOpen} onClose={() => setIsOpen([false, {}])}>
                    <PopUpAccountSettings name={isOpen[1].DataName} value={isOpen[1].value} />
                </Modal>
            </Wrapper>
        </>
    );
};

export default AccountData;
