import { OrderSectionTitle } from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem.style';
import React from 'react';
import { DeliveryData, UserData, UserDataDescription, Wrapper } from './OrderUserDataSection.style';

const OrderUserDataSection = ({ value }) => {
    return (
        <Wrapper>
            <DeliveryData>
                <OrderSectionTitle>Adres odbioru</OrderSectionTitle>
                <UserDataDescription>
                    <ul>
                        <li>{value.transactionInfo.recipientDetails.street}</li>
                        <li>
                            {value.transactionInfo.recipientDetails.zipCode}{' '}
                            {value.transactionInfo.recipientDetails.place}{' '}
                        </li>
                    </ul>
                </UserDataDescription>
            </DeliveryData>
            <UserData>
                <OrderSectionTitle>Dane odbiorcy</OrderSectionTitle>
                <UserDataDescription>
                    <ul>
                        <li>
                            <b>{value.transactionInfo.recipientDetails.name}</b>
                        </li>
                        <li>tel. {value.transactionInfo.recipientDetails.phone}</li>
                        <li>e-mail: {value.transactionInfo.recipientDetails.email}</li>
                    </ul>
                </UserDataDescription>
            </UserData>
        </Wrapper>
    );
};

export default OrderUserDataSection;
