import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import Contact from 'components/molecules/Contact/Contact';
import Newsletter from 'components/molecules/Newsletter/Newsletter';
import React from 'react';
import { Wrapper } from './HomeBottomContent.style';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const HomeBottomContent = () => {
    return (
        <>
            <SectionDescription title={'Informacje'} icon={<AiOutlineInfoCircle />} />
            <Wrapper>
                <Newsletter />
                <Contact />
            </Wrapper>
        </>
    );
};

export default HomeBottomContent;
