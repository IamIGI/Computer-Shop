import { Title, Description } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { InfoSection, Info, IconInfo, ContentInfo, TitleInfo, DescInfo } from './DlaczegoMy.style';
import { GrHelp } from 'react-icons/gr';
import { FiThumbsUp } from 'react-icons/fi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';

const DlaczegoMy = ({ description }) => {
    const InfoIcons = [<FiThumbsUp />, <HiOutlineLightBulb />, <TbShoppingCartDiscount />];
    return (
        <>
            <Title>
                <SectionDescription title={description[1].title} icon={<GrHelp />} />
            </Title>
            <Description>
                {description[1].content.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </Description>
            <InfoSection>
                {description[1].extras.map((extra, index) => (
                    <Info>
                        <IconInfo>{InfoIcons[index]}</IconInfo>
                        <ContentInfo>
                            <TitleInfo>{extra.title}</TitleInfo>
                            <DescInfo>{extra.description}</DescInfo>
                        </ContentInfo>
                    </Info>
                ))}
            </InfoSection>
        </>
    );
};

export default DlaczegoMy;
