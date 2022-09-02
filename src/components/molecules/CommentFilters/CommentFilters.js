import {
    Wrapper,
    Title,
    Filters,
    Confirmed,
    Sort,
    SelectStyle,
    ConfirmedDesc,
    Checkbox,
    NumberOfComments,
} from './CommentFilters.style';
import { useState } from 'react';

const CommentFilters = ({ commentsSize }) => {
    const [check, toggleCheck] = useState(false);

    return (
        <Wrapper>
            <NumberOfComments>
                Wyniki: {commentsSize} z {commentsSize}
            </NumberOfComments>
            <Title>Filtruj: </Title>
            <Filters>
                <SelectStyle>
                    <select>
                        <option>Wszystkie oceny</option>
                        <option>1 gwiazdka</option>
                        <option>2 gwiazdka</option>
                        <option>3 gwiazdka</option>
                        <option>4 gwiazdka</option>
                        <option>5 gwiazdka</option>
                        <option>6 gwiazdka</option>
                    </select>
                </SelectStyle>
            </Filters>
            <Confirmed>
                <Checkbox type="checkbox" onChange={() => toggleCheck(!check)} checked={check} />
                <ConfirmedDesc onClick={() => toggleCheck(!check)}>Potwierdzone zakupy</ConfirmedDesc>
            </Confirmed>
            <Title>Sortuj:</Title>
            <Sort>
                <SelectStyle>
                    <select>
                        <option>Najnowsze</option>
                        <option>Najstarsze</option>
                        <option>Najbardziej pomocne</option>
                        <option>Najwyższe oceny</option>
                        <option>Najniższe oceny</option>
                    </select>
                </SelectStyle>
            </Sort>
        </Wrapper>
    );
};

export default CommentFilters;
