import { Wrapper, Icon } from './BadFiltersInfo.style';
import { TbDeviceLaptopOff } from 'react-icons/tb';

const BadFiltersInfo = () => {
    return (
        <Wrapper>
            <Icon>
                <TbDeviceLaptopOff />
            </Icon>
            <p>Brak produktów spełniająctch dane kryteria</p>
        </Wrapper>
    );
};

export default BadFiltersInfo;
