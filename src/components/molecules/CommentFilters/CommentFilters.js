import {
    Wrapper,
    Filters,
    Confirmed,
    Sort,
    ConfirmedDesc,
    Checkbox,
    NumberOfComments,
    SmallScreen,
    BigScreen,
} from './CommentFilters.style';
import { useState, useEffect } from 'react';
import { ratingOptions, filterOptions } from './CommentFilters.logic';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';
import useComment from 'hooks/useComment';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';

const CommentFilters = () => {
    const { comments, handleFilters } = useComment();

    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('date');
    const [confirmed, setConfirmed] = useState(false);
    const { length: commentsSize, length_AllComments: totalNumberOfComments } = comments;
    const product = useSelector(getProductById);

    useEffect(() => {
        let filters = { productId: product._id, filters: { rating, confirmed }, sortBy };
        handleFilters(filters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating, sortBy, confirmed, product]);

    const handleSortBy = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                setSortBy(data[i].value);
                break;
            }
        }
    };

    const handleRating = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                setRating(data[i].value);
                break;
            }
        }
    };

    return (
        <>
            {Boolean(comments) && comments?.length_AllComments === 0 ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <NumberOfComments>
                            Wyniki: {commentsSize} z {totalNumberOfComments}
                        </NumberOfComments>
                        <Filters>
                            <SetFilterItems
                                OneTimeChoice={true}
                                width="230px"
                                description={'Oceny'}
                                filterData={ratingOptions}
                                handleItems={handleRating}
                            />
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
                            <SetFilterItems
                                OneTimeChoice={true}
                                width="230px"
                                description={'Sortuj'}
                                filterData={filterOptions}
                                handleItems={handleSortBy}
                            />
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
