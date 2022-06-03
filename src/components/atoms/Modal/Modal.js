import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonLocal, ButtonWrap, Overlay, Wrapper } from './Modal.styles';

const Modal = ({ open, children, onClose }) => {
    if (!open[0]) return null;
    // return ReactDOM.createPortal(
    return (
        <>
            <Overlay />
            <Wrapper>
                <div>{children}</div>
                <ButtonWrap>
                    <ButtonLocal onClick={onClose}>Zamnknij okno</ButtonLocal>
                </ButtonWrap>
            </Wrapper>

            {/* </>
         document.getElementById('portal') */}
        </>
    );
};

export default Modal;
