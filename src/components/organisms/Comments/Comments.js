import { Wrapper } from './Comments.style';
import { useState, useEffect } from 'react';
import { getAllComments } from 'api/comments';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const Comments = ({ productId }) => {
    const [waitForFetch, setWaitForFetch] = useState(false);
    const [comments, setComment] = useState([]);

    //get all comments
    useEffect(() => {
        setWaitForFetch(true);
        const fetchComment = async () => {
            setComment(await getAllComments(productId));
        };

        fetchComment();
        setWaitForFetch(false);
    }, []);

    // console.log(comments[0].confirmed);
    return (
        <Wrapper id="Opinions">
            <p>CommentsSection</p>
            {waitForFetch ? (
                <>
                    <LoadingAnimation />
                </>
            ) : (
                <>
                    {comments.length === 0 ? (
                        <p>Brak komentarzy</p>
                    ) : (
                        <ul>
                            {comments.map((item, index) => (
                                <div key={item._id}>
                                    <li>
                                        Imie: {item.userName} - {item.confirmed && 'Potwierdzony'}
                                    </li>
                                    <li>
                                        Ocena: {item.content.rating} - {item.date} <br /> {item.content.description}{' '}
                                    </li>
                                    <li>
                                        Bilans lików: {item.likes.up} - {item.likes.down}{' '}
                                    </li>
                                    <p>----------------------</p>
                                </div>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default Comments;
