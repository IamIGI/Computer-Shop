import { useState } from 'react';
import { HintSection, HintIcon, HintDescription, HintTitle, HintAsk } from './ProductBuyHint.style';
import Modal from 'components/atoms/Modal/Modal';

const ProductBuyHint = ({ icon, title, ask, popUp }) => {
    const [isOpen, setIsOpen] = useState([false]);

    return (
        <>
            <HintSection onClick={() => setIsOpen([true])}>
                <HintIcon>{icon}</HintIcon>
                <HintDescription>
                    <HintTitle>{title}</HintTitle>
                    <HintAsk>{ask}</HintAsk>
                </HintDescription>
            </HintSection>
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                {popUp}
            </Modal>
        </>
    );
};

export default ProductBuyHint;
