import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import Contact from 'components/molecules/Contact/Contact';
import Newsletter from 'components/molecules/Newsletter/Newsletter';
import { Wrapper, InsideWrapper } from './HomeBottomContent.style';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const HomeBottomContent = () => {
    return (
        <Wrapper>
            <SectionDescription title={'Informacje'} icon={<AiOutlineInfoCircle />} />
            <InsideWrapper>
                <Newsletter />
                <Contact />
            </InsideWrapper>
        </Wrapper>
    );
};

export default HomeBottomContent;
