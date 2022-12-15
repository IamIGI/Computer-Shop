import React from 'react';
import { Wrapper, Icon } from './DescriptionSection.style';

const DescriptionSection = ({ icon, description }) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <p>{description}</p>
        </Wrapper>
    );
};

export default DescriptionSection;
