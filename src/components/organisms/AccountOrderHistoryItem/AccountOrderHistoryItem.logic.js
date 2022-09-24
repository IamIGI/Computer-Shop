import { BsTruck, BsInboxes } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { RiVisaLine } from 'react-icons/ri';
import { BsCashCoin, BsWallet2, BsPiggyBank } from 'react-icons/bs';
import { Prices } from 'data/Prices';

export const getDeliveryMethodDescription = (method) => {
    switch (method) {
        case 'deliveryMan':
            return { desc: 'Kurier – InPost, UPS, FedEx, DTS bezpłatnie', icon: <BsTruck /> };
        case 'atTheSalon':
            return { desc: 'Odbiór w salonie HotShoot', icon: <FaRegBuilding /> };
        case 'locker':
            return { desc: 'Paczkomat 24/7', icon: <BsInboxes /> };

        default:
            console.log({ Err: 'Missing Order Method' });
            break;
    }
};

export const getPaymentMethodDescription = (method) => {
    switch (method) {
        case 'online':
            return { desc: 'Płatność online', icon: <HiStatusOnline /> };
        case 'card':
            return { desc: 'Karta płatnicza online', icon: <RiVisaLine /> };
        case 'cash':
            return { desc: 'Przelew gotówkowy', icon: <BsCashCoin /> };
        case 'uponReceipt':
            return { desc: 'Przy odbiorze', icon: <BsWallet2 /> };
        case 'installment':
            return { desc: 'Raty', icon: <BsPiggyBank /> };

        default:
            console.log({ Err: 'Missing Payment Method' });
            break;
    }
};

export const getDeliveryPrice = (method) => {
    switch (method) {
        case 'deliveryMan':
            return Prices.deliveryMan;

        case 'atTheSalon':
            return Prices.atTheSalon;

        case 'locker':
            return Prices.locker;

        default:
            console.log(`Bad payment method ${method} `);
            break;
    }
};
