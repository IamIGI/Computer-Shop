import { useState } from 'react';
import { On, Off, Wrapper, StarWrapper } from './StarRating.style';
import { MdStar } from 'react-icons/md';

const StarRating = ({ rating, handleRating }) => {
    const [hover, setHover] = useState(0);
    return (
        <Wrapper>
            {[...Array(6)].map((star, index) => {
                index += 1;
                return (
                    <StarWrapper>
                        {index <= (hover || rating) ? (
                            <On>
                                <MdStar
                                    key={index}
                                    onClick={() => handleRating(index)}
                                    onMouseOver={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                ></MdStar>
                            </On>
                        ) : (
                            <Off>
                                <MdStar
                                    key={index}
                                    onClick={() => handleRating(index)}
                                    onMouseOver={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                ></MdStar>
                            </Off>
                        )}
                    </StarWrapper>
                );
            })}
        </Wrapper>
    );
};

export default StarRating;
