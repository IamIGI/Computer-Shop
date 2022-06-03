import React from 'react';
import { ContentTitle, IconTitle, Line, Wrapper } from './SectionDescription.styles';

const SectionDescription = ({ title, icon }) => {
    return (
        <>
            <Wrapper>
                <IconTitle>{icon}</IconTitle>
                <ContentTitle>{title} </ContentTitle>
                <Line />
            </Wrapper>
        </>
    );
};

export default SectionDescription;
