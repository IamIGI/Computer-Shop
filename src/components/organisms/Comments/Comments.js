import { Wrapper } from './Comments.style';
import { useState, useEffect } from 'react';
import { getAllComments } from 'api/comments';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useComments from 'hooks/useComments';
import useAverageScore from 'hooks/useAverageScore';

const Comments = ({ productId }) => {
    const [comments, getComments, waitForFetchComments] = useComments(productId);
    const [averageScore, getAverageScore, waitForFetchAS] = useAverageScore(productId);
    useEffect(() => {
        getComments();
        getAverageScore();
    }, []);

    return (
        <Wrapper id="Opinions">
            <p>AverageScore Section </p>
            {waitForFetchAS ? (
                <>
                    <LoadingAnimation />
                </>
            ) : Object.keys(averageScore).length == 0 ? (
                <>
                    <p>Brak Ocen</p>
                </>
            ) : (
                <>
                    <ul>
                        <li>
                            {averageScore.averageScore_View} - {averageScore.averageScore_Stars}
                        </li>
                        <li>
                            {' '}
                            <ul>
                                <li>One: {averageScore.eachScore.one}</li>
                                <li>Two: {averageScore.eachScore.two}</li>
                                <li>Three: {averageScore.eachScore.three}</li>
                                <li>Four: {averageScore.eachScore.four}</li>
                                <li>Five: {averageScore.eachScore.five}</li>
                                <li>Six: {averageScore.eachScore.six}</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )}

            <p>CommentsSection</p>
            {waitForFetchComments ? (
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
