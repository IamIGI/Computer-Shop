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
import { useState, useEffect } from 'react';

const CommentFilters = ({ productId, handleFilters, comments }) => {
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('date');
    const [confirmed, setConfirmed] = useState(false);
    const { length: commentsSize } = comments;

    useEffect(() => {
        let filters = { productId, filters: { rating, confirmed }, sortBy };
        handleFilters(filters);
    }, [rating, sortBy, confirmed]);

    const ratingOptions = [
        { label: 'Wszystkie oceny', value: 0 },
        { label: '1 gwiazdka', value: 1 },
        { label: '2 gwiazdka', value: 2 },
        { label: '3 gwiazdka', value: 3 },
        { label: '4 gwiazdka', value: 4 },
        { label: '5 gwiazdka', value: 5 },
        { label: '6 gwiazdka', value: 6 },
    ];

    const filterOptions = [
        { label: 'Najnowsze', value: 'date' },
        { label: 'Najstarsze', value: '-date' },
        { label: 'Najbardziej pomocne', value: 'likes.up' },
        { label: 'Najwyższe oceny', value: 'content.rating' },
        { label: 'Najniższe oceny', value: '-content.rating' },
    ];

    return (
        <Wrapper>
            <NumberOfComments>
                Wyniki: {commentsSize} z {commentsSize}
            </NumberOfComments>
            <Title>Filtruj: </Title>
            <Filters>
                <SelectStyle>
                    <select onChange={(e) => setRating(e.target.value)}>
                        {ratingOptions.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </SelectStyle>
            </Filters>
            <Confirmed>
                <Checkbox type="checkbox" onChange={() => setConfirmed(!confirmed)} checked={confirmed} />
                <ConfirmedDesc onClick={() => setConfirmed(!confirmed)}>Potwierdzone zakupy</ConfirmedDesc>
            </Confirmed>
            <Title>Sortuj:</Title>
            <Sort>
                <SelectStyle>
                    <select onChange={(e) => setSortBy(e.target.value)}>
                        {filterOptions.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </SelectStyle>
            </Sort>
        </Wrapper>
    );
};

export default CommentFilters;
