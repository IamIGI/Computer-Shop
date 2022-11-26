import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import OrderForm from '../OderForm/OderForm';
import {
    ChangeRecipient,
    DeleteRecipient,
    FormWrapper,
    LoadingWrapper,
    NoTemplates,
    TemplateContainer,
    TemplateWrapper,
    Wrapper,
} from './AccountRecipientTemplate.style';
import { initRecipientDetails } from 'components/templates/Basket/Basket.logic';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const AccountRecipientTemplate = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [recipientTemplates, setRecipientTemplates] = useState([]);
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [recipientFormData, setRecipientFormData] = useState(initRecipientDetails);
    const [preloadValues, setPreloadValues] = useState({});

    const handlePreloadValues = (values) => {
        setPreloadValues(values);
    };

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    const handleRecipientFormData = (name, street, zipCode, place, email, phone, comment, recipientId) => {
        setRecipientFormData({ name, street, zipCode, place, email, phone, comment, recipientId });
    };

    const handleDelete = (recipientId) => {
        const deleteAccountRecipientTemplate = async (data) => {
            try {
                await axiosPrivate.delete('/user/template/delete', { headers: {}, data });
                handleRefresh();
            } catch (err) {
                console.log(err);
            }
        };

        const data = {
            userId: auth.id,
            recipientId,
        };
        deleteAccountRecipientTemplate(data);
    };

    useEffect(() => {
        if (recipientFormData.name !== '') {
            const addAccountRecipientTemplate = async (data) => {
                try {
                    await axiosPrivate.post('/user/template/add', data);
                    setRecipientFormData(initRecipientDetails);
                    handleRefresh();
                } catch (err) {
                    console.log(err);
                }
            };

            const editAccountRecipientTemplate = async (data) => {
                try {
                    await axiosPrivate.post('/user/template/edit', data);
                    setRecipientFormData(initRecipientDetails);
                    handleRefresh();
                } catch (err) {
                    console.log(err);
                }
            };

            if (!recipientFormData.recipientId) {
                const addData = {
                    userId: auth.id,
                    recipientTemplate: recipientFormData,
                };

                addAccountRecipientTemplate(addData);
            } else {
                const editData = {
                    userId: auth.id,
                    recipientId: recipientFormData.recipientId,
                    recipientTemplate: recipientFormData,
                };

                editAccountRecipientTemplate(editData);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipientFormData]);

    useEffect(() => {
        const getAccountRecipientTemplate = async (data) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/template/get', data);
                setRecipientTemplates(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id,
        };

        getAccountRecipientTemplate(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh]);
    return (
        <AccountSettings>
            {waitForFetch ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : (
                <Wrapper>
                    <SectionTitle>
                        <SectionDescription title={'Szablony odbiorców'} icon={<BsPersonLinesFill />} />
                    </SectionTitle>
                    {recipientTemplates.length === 0 ? (
                        <NoTemplates>Nie masz stworzonych żadnych szablonów</NoTemplates>
                    ) : (
                        <TemplateWrapper>
                            {recipientTemplates.map((template) => (
                                <TemplateContainer>
                                    <ul>
                                        <li>{template.name}</li>
                                        <li>{template.email}</li>
                                        <li>{template.phone}</li>
                                        <li>{template.place}</li>
                                        <li>{template.street}</li>
                                        <li>{template.zipCode}</li>
                                    </ul>
                                    <ChangeRecipient onClick={() => handlePreloadValues(template)}>
                                        Zmień
                                    </ChangeRecipient>
                                    <DeleteRecipient onClick={() => handleDelete(template._id)}>
                                        <MdOutlineDeleteOutline />
                                    </DeleteRecipient>
                                </TemplateContainer>
                            ))}
                        </TemplateWrapper>
                    )}

                    {recipientTemplates.length < 4 && (
                        <FormWrapper>
                            <h2>Dodaj nowy szablon</h2>
                            <OrderForm
                                accountRecipientTemplate={true}
                                handlePreloadValues={handlePreloadValues}
                                preloadedValues={preloadValues}
                                handleOrderData={handleRecipientFormData}
                            />
                        </FormWrapper>
                    )}
                </Wrapper>
            )}
        </AccountSettings>
    );
};

export default AccountRecipientTemplate;
