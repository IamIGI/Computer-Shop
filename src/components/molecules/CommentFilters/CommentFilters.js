import {
    Wrapper,
    Title,
    Filters,
    Confirmed,
    Sort,
    ConfirmedDesc,
    Checkbox,
    NumberOfComments,
    SmallScreen,
    BigScreen,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating, sortBy, confirmed, product]);

    return (
        <>
            {!Boolean(comments) ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <NumberOfComments>
                            Wyniki: {commentsSize} z {totalNumberOfComments}
                        </NumberOfComments>
                        <Filters>
                            <Title>Filtruj: </Title>

                            <SelectStyle width="200px">
                                <select onChange={(e) => setRating(e.target.value)}>
                                    {ratingOptions.map((option, index) => (
                                        <option value={option.value} key={index}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </SelectStyle>
                        </Filters>
                        <BigScreen>
                            <Confirmed>
                                <Checkbox
                                    type="checkbox"
                                    onChange={() => setConfirmed(!confirmed)}
                                    checked={confirmed}
                                />
                                <ConfirmedDesc onClick={() => setConfirmed(!confirmed)}>
                                    Potwierdzone zakupy
                                </ConfirmedDesc>
                            </Confirmed>
                        </BigScreen>
                        <Sort>
                            <Title>Sortuj:</Title>
                            <SelectStyle width="200px">
                                <select onChange={(e) => setSortBy(e.target.value)}>
                                    {filterOptions.map((option, index) => (
                                        <option value={option.value} key={index}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </SelectStyle>
                        </Sort>
                    </Wrapper>
                    <SmallScreen>
                        <Confirmed>
                            <Checkbox type="checkbox" onChange={() => setConfirmed(!confirmed)} checked={confirmed} />
                            <ConfirmedDesc onClick={() => setConfirmed(!confirmed)}>Potwierdzone zakupy</ConfirmedDesc>
                        </Confirmed>
                    </SmallScreen>
                </>
            )}
        </>
    );
};

export default CommentFilters;
