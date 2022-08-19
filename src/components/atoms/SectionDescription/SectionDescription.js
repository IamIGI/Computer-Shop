import React from 'react';
import { ContentDescription, ContentTitle, IconTitle, Line, Wrapper } from './SectionDescription.styles';

const SectionDescription = ({ title, icon, description }) => {
    return (
        <>
            <Wrapper>
                <IconTitle>{icon}</IconTitle>
                <ContentTitle>{title} </ContentTitle>
                <ContentDescription>{description}</ContentDescription>
                {description ? <></> : <Line />}
            </Wrapper>
        </>
    );
};

export default SectionDescription;
