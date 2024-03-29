import { useState } from 'react';
import { ButtonLocal, InputLocal, LabelArea, SectionChange, SectionTitle, Wrapper } from './AccountData.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiSettings } from 'react-icons/fi';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAccountSettings from '../PupUpAccountSettings/PopUpAccountSettings';

//You need to pass right email
const AccountData = ({ accountInfo, handleRefresh }) => {
    const [isOpen, setIsOpen] = useState([false, { DataName: '', value: '' }]);
    const passwordMock = '****';
    return (
        <>
            <SectionTitle>
                <SectionDescription title={'Ustawienia'} icon={<FiSettings />} />
            </SectionTitle>

            <Wrapper>
                <h3>Dane konta</h3>

                <SectionChange>
                    <LabelArea>Imię</LabelArea>
                    <InputLocal value={accountInfo.firstName} name="firstName" disabled={true} />
                    <ButtonLocal
                        onClick={() => setIsOpen([true, { DataName: 'firstName', value: accountInfo.firstName }])}
                    >
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Nazwisko</LabelArea>
                    <InputLocal value={accountInfo.lastName} name="lastName" disabled={true} />
                    <ButtonLocal
                        onClick={() => setIsOpen([true, { DataName: 'lastName', value: accountInfo.lastName }])}
                    >
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Email</LabelArea>
                    <InputLocal value={accountInfo.email} name="email" disabled={true} />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'email', value: accountInfo.email }])}>
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <SectionChange>
                    <LabelArea>Hasło</LabelArea>
                    <InputLocal value={passwordMock} name="hashedPassword" type="password" disabled={true} />
                    <ButtonLocal onClick={() => setIsOpen([true, { DataName: 'hashedPassword', value: passwordMock }])}>
                        Zmień
                    </ButtonLocal>
                </SectionChange>

                <Modal open={isOpen} onClose={() => setIsOpen([false, {}])}>
                    <PopUpAccountSettings
                        name={isOpen[1].DataName}
                        value={isOpen[1].value}
                        onClose={() => setIsOpen([false, {}])}
                        handleRefresh={handleRefresh}
                    />
                </Modal>
            </Wrapper>
        </>
    );
};

export default AccountData;
