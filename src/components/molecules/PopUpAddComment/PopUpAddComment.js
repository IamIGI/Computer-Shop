import {
    AddComment,
    Rating,
    Information,
    ProductDescription,
    Image,
    Description,
    TextArea,
    Title,
    ProductName,
    RatingStars,
    WrapperOutside,
    WrapperInside,
    LittleDescription,
    AnonymousUser,
    Input,
    UserDescription,
    Alert,
    OpinionSection,
    NumOfChars,
    FailureDescription,
    FailureIcon,
    FailureSection,
} from './PopUpAddComment.style';
import { useEffect, useState, useReducer } from 'react';
import StarRating from 'components/atoms/StarRating/StarRating';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';
import useAuth from 'hooks/useAuth';
import { sendCommentAPI } from 'api/comments';
import { BiCommentError } from 'react-icons/bi';
import { ACTIONS, INITIAL_STATE, reducerFunction } from './reducerLogic';

const PopUpAddComment = ({ name, prevImg, productId, onClose, handleRefreshComments }) => {
    const { auth } = useAuth();
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
    const [userName, setUserName] = useState(Boolean(auth.userName) ? auth.userName : '');

    const changeState = (type, value) => {
        dispatch({
            type,
            payload: value,
        });
    };

    const handleRating = (value) => {
        dispatch({
            type: ACTIONS.RATING,
            payload: value,
        });
    };

    const handleAlert = (showAlert, key, message) => {
        dispatch({
            type: ACTIONS.ALERT,
            payload: { showAlert, key, message },
        });
    };

    const handleLanguageValidation = (showAlert, message) => {
        dispatch({
            type: ACTIONS.LANGUAGE_VALIDATION,
            payload: { showAlert, message },
        });
    };

    useEffect(() => {
        if (state.sendComment) {
            if (userName.length !== 0 && state.opinion.length > 10 && state.rating !== 0) {
                const sendData = async (state) => {
                    const data = {
                        productId,
                        userId: Boolean(auth.id) ? auth.id : '',
                        userName,
                        content: {
                            rating: state.rating,
                            description: state.opinion.replace(/\n/g, '也'),
                        },
                    };

                    try {
                        const response = await sendCommentAPI(data);
                        if (response.code === 5) {
                            handleLanguageValidation(true, 'Imie zawiera słowa wulgarne');
                            dispatch({ type: ACTIONS.CLEAR_ALERT });
                        } else if (response.code === 1) {
                            handleLanguageValidation(true, 'Wiadomość zawiera słowa wulgarne');
                            dispatch({ type: ACTIONS.CLEAR_ALERT });
                        } else if (response.code === 4) {
                            handleLanguageValidation(false, '');
                            dispatch({ type: ACTIONS.RESET });
                            changeState(ACTIONS.SEND_COMMENT, false);
                            onClose();
                            handleRefreshComments();
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
                };

                sendData(state);
            } else {
                handleLanguageValidation(false, '');
                console.log('Data is bad');

                userName.length === 0
                    ? handleAlert(true, 'userName', 'Brakujące pole - Podpis')
                    : handleAlert(true, 'userName', '');
                state.opinion.length <= 10
                    ? handleAlert(true, 'opinion', 'Brakujące pole - Opinia (min. 10 znaków)')
                    : handleAlert(true, 'opinion', '');
                state.rating === 0
                    ? handleAlert(true, 'rating', 'Minimalna ocena to 1')
                    : handleAlert(true, 'rating', '');
            }
            changeState(ACTIONS.SEND_COMMENT, false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.sendComment]);

    return (
        <WrapperOutside>
            <Title>Dodaj opinię</Title>
            <WrapperInside>
                <ProductDescription>
                    <Image>
                        <img src={prevImg} alt="Prev product" />
                    </Image>
                    <ProductName>
                        <p>{name}</p>
                    </ProductName>
                </ProductDescription>
                <Rating>
                    <Description>Oceń produkt</Description>
                    <RatingStars>
                        <StarRating rating={state.rating} handleRating={handleRating} />
                    </RatingStars>
                </Rating>
                <Information>
                    <Description>Napisz co myślisz o naszym produkcie</Description>
                    <LittleDescription>
                        Pamiętaj, że twoja opinia powinna dotyczyć produktu i jego funkcjonalności.
                    </LittleDescription>
                </Information>
                {/* Check is it logged user*/}
                {Object.keys(auth).length === 0 ? (
                    <>
                        <AnonymousUser>
                            <UserDescription>Powiedz nam jak się nazywasz</UserDescription>
                            <Input
                                placeholder="Podpis"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </AnonymousUser>
                    </>
                ) : (
                    <></>
                )}
                <OpinionSection>
                    <TextArea
                        placeholder="Opinia"
                        value={state.opinion}
                        onChange={(e) => dispatch({ type: ACTIONS.OPINION, payload: e.target.value })}
                        maxLength={2000}
                        onChangeCapture={(e) => changeState(ACTIONS.COUNT_CHAR, e.target.value.length)}
                    />
                    <NumOfChars>{state.countChar}/2000</NumOfChars>
                </OpinionSection>
                <AddComment>
                    <BuyButton onClick={() => changeState(ACTIONS.SEND_COMMENT, true)}>
                        <p>Dodaj opinię</p>
                    </BuyButton>
                    {state.languageValidation.showAlert ? (
                        <FailureSection>
                            <FailureIcon>
                                <BiCommentError />
                            </FailureIcon>
                            <FailureDescription>{state.languageValidation.message}</FailureDescription>
                        </FailureSection>
                    ) : (
                        <></>
                    )}
                    {state.alert.showAlert ? (
                        <Alert>
                            {state.alert.userName !== '' && (
                                <>
                                    {state.alert.userName}
                                    <br />
                                </>
                            )}
                            {state.alert.opinion !== '' && (
                                <>
                                    {state.alert.opinion}
                                    <br />
                                </>
                            )}
                            {state.alert.rating !== '' && <>{state.alert.rating}</>}
                        </Alert>
                    ) : (
                        <></>
                    )}
                </AddComment>
            </WrapperInside>
        </WrapperOutside>
    );
};

export default PopUpAddComment;
