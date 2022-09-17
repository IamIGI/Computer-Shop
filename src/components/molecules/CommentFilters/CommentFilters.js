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
import { ratingOptions, filterOptions } from './CommentFilters.logic';

const CommentFilters = ({ handleFilters, comments }) => {
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('date');
    const [confirmed, setConfirmed] = useState(false);
    const { length: commentsSize, length_AllComments: totalNumberOfComments } = comments;
    const { product } = useProduct();

    useEffect(() => {
        let filters = { productId: product._id, filters: { rating, confirmed }, sortBy };
        handleFilters(filters);
    }, [rating, sortBy, confirmed, product]);

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
