import usePromoCodes from 'hooks/usePromoCodes';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import {
    PromoButton,
    PromoSection,
    CustomPromoForm,
    PromoCodeAlert,
    PromoCodeAlertSection,
    PromoCodeIcon,
    PromoDescription,
    PromoInput,
} from './PromoSection.style';

const PromoSectionComponent = () => {
    const { promoCodeAlert, promoCode, promoCodeInputDisabled, sendPromoCode, promoCodeSubmit } = usePromoCodes();

    const handlePromoCodeSubmit = (e) => {
        e.preventDefault();
        promoCodeSubmit();
    };

    return (
        <PromoSection>
            <PromoDescription>Posiadasz kod promocyjny?</PromoDescription>
            <CustomPromoForm onSubmit={handlePromoCodeSubmit}>
                <PromoInput
                    placeholder="..."
                    type="text"
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => sendPromoCode(e.target.value)}
                    disabled={promoCodeInputDisabled}
                />
                <PromoButton disabled={promoCodeInputDisabled}>Aktywuj</PromoButton>
            </CustomPromoForm>
            {promoCodeAlert !== '' && (
                <PromoCodeAlertSection>
                    <PromoCodeIcon>
                        <TbShoppingCartDiscount />
                    </PromoCodeIcon>
                    <PromoCodeAlert>{promoCodeAlert}</PromoCodeAlert>
                </PromoCodeAlertSection>
            )}
        </PromoSection>
    );
};

export default PromoSectionComponent;
