import {
    Wrapper,
    Title,
    Filters,
    Confirmed,
    Sort,
    ConfirmedDesc,
    Checkbox,
    NumberOfComments,
} from './CommentFilters.style';
import { SelectStyle } from 'components/atoms/SelectStyle/SelectStyle';
import { useState, useEffect } from 'react';
import useProduct from 'hooks/useProduct';

const CommentFilters = ({ handleFilters, comments }) => {
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('date');
    const [confirmed, setConfirmed] = useState(false);
    const { length: commentsSize, length_AllComments: totalNumberOfComments } = comments;
    const { product } = useProduct();
    console.log(product);
    useEffect(() => {
        let filters = { productId: product._id, filters: { rating, confirmed }, sortBy };
        handleFilters(filters);
    }, [rating, sortBy, confirmed, product]);

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
                Wyniki: {commentsSize} z {totalNumberOfComments}
            </NumberOfComments>
            <Title>Filtruj: </Title>
            <Filters>
                <SelectStyle width="200px">
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
                <SelectStyle width="200px">
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
