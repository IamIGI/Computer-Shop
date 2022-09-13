import { Title } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { AboutMe, PageSection, PageImage, PageDescription } from './GdzieMnieZnajdziesz.style';
import { RiContactsLine } from 'react-icons/ri';

const GdzieMnieZnajdziesz = ({ description }) => {
    return (
        <>
            <Title>
                <SectionDescription title={description[3].title} icon={<RiContactsLine />} />
            </Title>
            <AboutMe>
                {description[3].content.map((paragraph) => (
                    <PageSection>
                        <a href={paragraph.href}>
                            <PageImage>
                                <img src={paragraph.image} alt="StackImage" />
                            </PageImage>
                            <PageDescription>{paragraph.description}</PageDescription>
                        </a>
                    </PageSection>
                ))}
            </AboutMe>
        </>
    );
};

export default GdzieMnieZnajdziesz;