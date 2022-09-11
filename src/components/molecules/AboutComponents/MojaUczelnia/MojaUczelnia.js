import { Title } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FaUniversity } from 'react-icons/fa';
import {
    UniversitySection,
    UniversityInfo,
    UniversityDescription,
    UniversityData,
    UniversityImage,
} from './MojaUczelnia.style';

const MojaUczelnia = ({ description }) => {
    return (
        <>
            <Title>
                <SectionDescription title={description[4].title} icon={<FaUniversity />} />
            </Title>
            <UniversitySection>
                <UniversityInfo>
                    <UniversityDescription>{description[4].content[0]}</UniversityDescription>
                    <UniversityData>
                        <ul>
                            <li>{description[4].content[1]}</li>
                            <li>
                                <a href="https://www.agh.edu.pl">{description[4].content[2]}</a>
                            </li>
                            <li>{description[4].content[3]}</li>
                            <li>{description[4].content[4]}</li>
                        </ul>
                    </UniversityData>
                </UniversityInfo>
                <UniversityImage>
                    <img src={description[4].image} alt="StackImage" />
                </UniversityImage>
            </UniversitySection>
        </>
    );
};

export default MojaUczelnia;
