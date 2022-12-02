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

const PromoSectionComponent = ({
    handlePromoCodeSubmit,
    promoCode,
    handlePromoCode,
    promoCodeInputDisabled,
    promoCodeAlert,
}) => {
    return (
        <PromoSection>
            <PromoDescription>Posiadasz kod promocyjny?</PromoDescription>
            <CustomPromoForm onSubmit={handlePromoCodeSubmit}>
                <PromoInput
                    placeholder="..."
                    type="text"
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => handlePromoCode(e.target.value)}
                    disabled={promoCodeInputDisabled}
                />
                <PromoButton>Aktywuj</PromoButton>
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