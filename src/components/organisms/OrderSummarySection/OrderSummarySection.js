import React from 'react';
import { getDeliveryPrice } from '../AccountOrderHistoryItem/AccountOrderHistoryItem.logic';
import { Line } from '../AccountOrderHistoryItem/AccountOrderHistoryItem.style';
import { Wrapper } from './OrderSummarySection.style';

const OrderSummarySection = ({ value }) => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <div> Wartość koszyka:</div>
                    <div>
                        {(value.transactionInfo.price - getDeliveryPrice(value.transactionInfo.deliveryMethod)).toFixed(
                            2
                        )}
                        zł
                    </div>
                </li>
                <li>
                    <div>Koszt dostawy: </div>
                    <div>{getDeliveryPrice(value.transactionInfo.deliveryMethod)} zł</div>
                </li>
                <Line />
                <li>
                    <div>Razem: </div>
                    <div>{value.transactionInfo.price} zł</div>
                </li>
            </ul>
        </Wrapper>
    );
};

export default OrderSummarySection;
