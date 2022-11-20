import { checkBreakLine } from 'components/molecules/CommentItem/CommentItem.logic';
import React from 'react';
import { ContentDescription, ContentTitle, IconTitle, Line, Wrapper } from './SectionDescription.styles';

const SectionDescription = ({ title, icon, description, showTitle = true }) => {
    return (
        <Wrapper>
            <IconTitle>{icon}</IconTitle>
            {showTitle && <ContentTitle>{title} </ContentTitle>}
            <ContentDescription>{description && checkBreakLine(description)}</ContentDescription>
            {description ? <></> : <Line />}
        </Wrapper>
    );
};

export default SectionDescription;
