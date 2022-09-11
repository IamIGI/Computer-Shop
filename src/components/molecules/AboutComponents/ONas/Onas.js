import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { Title, Description } from 'components/templates/About/About.styles';
import { DataShortSection, Data, Icon, Numbers, Desc } from './ONas.style';
import { FaPeopleCarry } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsGear, BsLaptop, BsCart2 } from 'react-icons/bs';
import { MdTagFaces } from 'react-icons/md';

const Onas = ({ description }) => {
    const dataShortIcons = [<HiOutlineOfficeBuilding />, <BsGear />, <MdTagFaces />, <BsLaptop />, <BsCart2 />];

    return (
        <>
            <Title>
                <SectionDescription title={description[0].title} icon={<FaPeopleCarry />} />
            </Title>
            <DataShortSection>
                {description[0].extras.map((extra, index) => (
                    <Data>
                        <Icon>{dataShortIcons[index]}</Icon>
                        <Numbers>{extra.numbers}</Numbers>
                        <Desc>{extra.description}</Desc>
                    </Data>
                ))}
            </DataShortSection>
            <Description>
                {description[0].content.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </Description>
        </>
    );
};

export default Onas;
