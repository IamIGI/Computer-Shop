import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Overlay } from '../Modal/Modal.styles';
import {
    Wrapper,
    Icon,
    BigIcon,
    LinkDescription,
    ActiveDropDown,
    ProperMenu,
    DivRelative,
} from './DropDownMenuSection.style';

const DropDownMenuSection = ({ icon, description, smallScreen, children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* <Overlay /> */}
            <Wrapper onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                <DivRelative>
                    <ActiveDropDown display={toggle}>
                        <span>{smallScreen ? <BigIcon>{icon}</BigIcon> : <Icon>{icon}</Icon>}</span>
                        {description !== '' && <LinkDescription>{description}</LinkDescription>}
                    </ActiveDropDown>
                    <ProperMenu display={toggle}>{children}</ProperMenu>
                </DivRelative>
            </Wrapper>
        </>
    );
};

export default DropDownMenuSection;

// const DropDownMenuSection = ({ icon, description, smallScreen, children }) => {
//     const [toggle, setToggle] = useState(false);

//     return ReactDOM.createPortal(
//         <>
//             <Overlay />
//             <Wrapper onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
//                 <DivRelative>
//                     <ActiveDropDown display={toggle}>
//                         <span>{smallScreen ? <BigIcon>{icon}</BigIcon> : <Icon>{icon}</Icon>}</span>
//                         {description !== '' && <LinkDescription>{description}</LinkDescription>}
//                     </ActiveDropDown>
//                     <ProperMenu display={toggle}>{children}</ProperMenu>
//                 </DivRelative>
//             </Wrapper>
//         </>,
//         document.getElementById('insideWrapper')
//     );
// };

// export default DropDownMenuSection;
