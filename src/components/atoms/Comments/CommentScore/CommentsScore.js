import { Wrapper, InsideWrapper, ScoreDescription, Icon3, LikeNumber, Alert, Icon4 } from './CommentScore.style';
import { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { ImSad } from 'react-icons/im';

import useAuth from 'hooks/useAuth';
import { addLike } from 'api/comments';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { refreshComments } from 'features/comments/commentsSlice';

const CommentsScore = ({ comment }) => {
    const dispatchStore = useDispatch();
    const product = useSelector(getProductById);

    const { auth } = useAuth();
    const [notLoggedIn, setNotLoggedIn] = useState([false, '']);

    const onLikeComment = async (value) => {
        const data = {
            productId: product._id,
            commentId: value[1]._id,
            userId: Boolean(auth.id) ? auth.id : '',
            likes: {
                up: value[0],
            },
        };

        try {
            const response = await addLike(data);
            if (response === 403) {
                setNotLoggedIn([true, value[1]._id, 'Musisz być zalogowany']);
            } else if (response === 405) {
                setNotLoggedIn([true, value[1]._id, 'Możesz tylko zmienić swój wybór']);
            } else {
                setNotLoggedIn([false, '']);
                dispatchStore(refreshComments());
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }

        setTimeout(() => {
            setNotLoggedIn([false, '']);
        }, 2000);
    };
    return (
        <Wrapper>
            <InsideWrapper>
                <ScoreDescription>Czy ta opinia była pomocna?</ScoreDescription>{' '}
                <Icon3 onClick={() => onLikeComment([true, comment])}>
                    <AiOutlineLike />
                </Icon3>
                <LikeNumber>{comment.likes.up}</LikeNumber>
                <Icon3 onClick={() => onLikeComment([false, comment])}>
                    <AiOutlineDislike />
                </Icon3>
                <LikeNumber>{comment.likes.down}</LikeNumber>
            </InsideWrapper>
            <Alert>{notLoggedIn[0] && notLoggedIn[1] === comment._id ? <>{notLoggedIn[2]}</> : <></>}</Alert>
        </Wrapper>
    );
};

export default CommentsScore;
