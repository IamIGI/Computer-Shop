import React from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';

import { Close, InsideWrapper, Overlay, OutsideWrapper } from './Modal.styles';

export default function Modal({ position, width, open, children, onClose }) {
    if (!open[0]) return null;

    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose} />
            <OutsideWrapper width={width} position={position}>
                <InsideWrapper>
                    <Close onClick={onClose}>
                        <GrClose />
                    </Close>

                    <div>{children}</div>
                </InsideWrapper>
            </OutsideWrapper>
        </>,
        document.getElementById('portal')
    );
}
