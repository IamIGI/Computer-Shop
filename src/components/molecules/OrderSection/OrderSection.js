import {
    getDeliveryMethodDescription,
    getPaymentMethodDescription,
} from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem.logic';
import { OrderSectionTitle } from 'components/organisms/AccountOrderHistoryItem/AccountOrderHistoryItem.style';

import { Desc, Icon, Wrapper, OrderSectionDescription } from './OrderSection.style';

const OrderSection = ({ value, title, type }) => {
    return (
        <Wrapper>
            <OrderSectionTitle>{title}</OrderSectionTitle>
            <OrderSectionDescription>
                <Icon>
                    {type === 'delivery'
                        ? getDeliveryMethodDescription(value).icon
                        : getPaymentMethodDescription(value).icon}
                </Icon>
                <Desc>
                    {type === 'delivery'
                        ? getDeliveryMethodDescription(value).desc
                        : getPaymentMethodDescription(value).desc}
                </Desc>
            </OrderSectionDescription>
        </Wrapper>
    );
};

export default OrderSection;
