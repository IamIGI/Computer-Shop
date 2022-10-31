import { Wrapper, SectionTitle } from './RecipientDetails.style';
import OrderForm from 'components/organisms/OderForm/OderForm';
import OrderComment from 'components/molecules/OrderComment/OrderComment';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { CgUserList } from 'react-icons/cg';
import { useState } from 'react';

const RecipientDetails = ({ handleOrderData }) => {
    const [comment, setComment] = useState('');

    const handleOrderComment = (data) => {
        setComment(data);
    };
    return (
        <>
            <SectionTitle id="recipient">
                <SectionDescription title={'Dane Odbiorcy'} icon={<CgUserList />} />
            </SectionTitle>
            <Wrapper>
                <OrderForm
                    handleOrderData={handleOrderData}
                    comment={comment}
                    handleOrderComment={handleOrderComment}
                />
                <OrderComment comment={comment} handleOrderComment={handleOrderComment} />
            </Wrapper>
        </>
    );
};

export default RecipientDetails;
