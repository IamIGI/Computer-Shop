import {
    CommentSection,
    Wrapper,
    Title,
    InfoSection,
    InfoIcon,
    InfoDesc,
    TextArea,
    NumOfChars,
} from './OrderComment.style';
import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const OrderComment = ({ handleOrderComment, comment }) => {
    const [countChar, setCountChar] = useState(0);

    return (
        <Wrapper>
            <Title>Komentarz do zamówienia</Title>
            <CommentSection>
                <TextArea
                    placeholder="Opinia"
                    value={comment}
                    onChange={(e) => handleOrderComment(e.target.value)}
                    maxLength={2000}
                    onChangeCapture={(e) => setCountChar(e.target.value.length)}
                />
                <NumOfChars>{countChar}/2000</NumOfChars>
            </CommentSection>
            <InfoSection>
                <InfoIcon>
                    <AiOutlineInfoCircle />
                </InfoIcon>
                <InfoDesc>
                    Czytamy wszystkie uwagi, więc jeśli je dodasz – może to mieć wpływ na czas realizacji zamówienia.
                </InfoDesc>
            </InfoSection>
        </Wrapper>
    );
};

export default OrderComment;
