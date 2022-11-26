import { Wrapper, SectionTitle, LoadingWrapper } from './RecipientDetails.style';
import OrderForm from 'components/organisms/OderForm/OderForm';
import OrderComment from 'components/molecules/OrderComment/OrderComment';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { CgUserList } from 'react-icons/cg';
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import RecipientTemplates from 'components/molecules/RecipientTemplates/RecipientTemplates';
import { useEffect } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const RecipientDetails = ({ handleOrderData }) => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState(true);
    const [recipientTemplates, setRecipientTemplates] = useState([]);
    const [comment, setComment] = useState('');
    const [preloadValues, setPreloadValues] = useState({});

    const handlePreloadValues = (values) => {
        setPreloadValues(values);
    };

    const handleOrderComment = (data) => {
        setComment(data);
    };

    useEffect(() => {
        const getAccountRecipientTemplate = async (data) => {
            try {
                setWaitForFetch(true);
                const response = await axiosPrivate.post('user/template/get', data);
                setRecipientTemplates(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log(err);
            }
        };
        const data = {
            userId: auth.id,
        };

        Boolean(auth.id) && getAccountRecipientTemplate(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <SectionTitle id="recipient">
                <SectionDescription title={'Dane Odbiorcy'} icon={<CgUserList />} />
            </SectionTitle>
            <Wrapper>
                {Boolean(auth.id) && (
                    <>
                        {waitForFetch ? (
                            <LoadingWrapper>
                                <LoadingAnimation loadingSize={15} />
                            </LoadingWrapper>
                        ) : (
                            <RecipientTemplates
                                showOptions={false}
                                recipientTemplates={recipientTemplates}
                                handlePreloadValues={handlePreloadValues}
                            />
                        )}
                    </>
                )}

                <OrderForm
                    handleOrderData={handleOrderData}
                    comment={comment}
                    accountRecipientTemplate={true}
                    handleOrderComment={handleOrderComment}
                    preloadedValues={preloadValues}
                />
                <OrderComment comment={comment} handleOrderComment={handleOrderComment} />
            </Wrapper>
        </>
    );
};

export default RecipientDetails;
