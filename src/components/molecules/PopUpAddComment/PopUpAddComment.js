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
    FileSection,
    FilesAlert,
    ButtonName,
    UserDescriptionSmall,
    ButtonAddComment,
} from './PopUpAddComment.style';
import { useState, useReducer } from 'react';
import StarRating from 'components/atoms/StarRating/StarRating';
import useAuth from 'hooks/useAuth';
import { sendCommentAPI } from 'api/comments';
import { BiCommentError } from 'react-icons/bi';
import { ACTIONS, INITIAL_STATE, reducerFunction } from './reducerLogic';
import toast from 'react-hot-toast';
import useComment from 'hooks/useComment';
import useProduct from 'hooks/useProduct';

const PopUpAddComment = ({ onClose }) => {
    const { handleRefreshComments } = useComment();
    const { product } = useProduct();
    const { auth } = useAuth();
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
    const [userName, setUserName] = useState(Boolean(auth.userName) ? auth.userName : '');
    const notify = () =>
        toast.success('Dodano komentarz', {
            icon: '🗨️',
            duration: 2000,
        });

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userName.length !== 0 && state.opinion.length > 10 && state.rating !== 0) {
            const formData = new FormData();
            Object.keys(state.files).forEach((key) => {
                formData.append(state.files.item(key).name, state.files.item(key));
            });
            formData.append('productId', product._id);
            formData.append('userId', Boolean(auth.id) ? auth.id : '');
            formData.append('userName', userName);
            formData.append('rating', state.rating);
            formData.append('description', state.opinion.replace(/\n/g, '也'));

            try {
                const response = await sendCommentAPI(formData);

                if (response.code === '105') {
                    handleLanguageValidation(true, 'Imie zawiera słowa wulgarne');
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '101') {
                    handleLanguageValidation(true, 'Wiadomość zawiera słowa wulgarne');
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '003') {
                    dispatch({
                        type: ACTIONS.FILES_ALERT,
                        payload: { showAlert: true, message: "Dopuszczalne rozszerznia: '.png', '.jpg', 'jpeg'" },
                    });
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === '004') {
                    dispatch({
                        type: ACTIONS.FILES_ALERT,
                        payload: { showAlert: true, message: 'Maksymalan waga pliku: 1MB' },
                    });
                    dispatch({ type: ACTIONS.CLEAR_ALERT });
                } else if (response.code === 104) {
                    //happyPath
                    handleLanguageValidation(false, '');
                    dispatch({ type: ACTIONS.RESET });
                    changeState(ACTIONS.SEND_COMMENT, false);
                    onClose();
                    handleRefreshComments();
                    notify();
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
        } else {
            handleLanguageValidation(false, '');

            userName.length === 0
                ? handleAlert(true, 'userName', 'Brakujące pole - Podpis')
                : handleAlert(true, 'userName', '');
            state.opinion.length <= 10
                ? handleAlert(true, 'opinion', 'Brakujące pole - Opinia (min. 10 znaków)')
                : handleAlert(true, 'opinion', '');
            state.rating === 0 ? handleAlert(true, 'rating', 'Minimalna ocena to 1') : handleAlert(true, 'rating', '');
        }
        changeState(ACTIONS.SEND_COMMENT, false);
    };

    return (
        <WrapperOutside>
            <Title>Dodaj opinię</Title>
            <WrapperInside>
                <form onSubmit={handleSubmit}>
                    <ProductDescription>
                        <Image>
                            <img src={product.prevImg} alt="Prev product" />
                        </Image>
                        <ProductName>
                            <p>{product.name}</p>
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
                        <AnonymousUser>
                            <UserDescription>Powiedz nam jak się nazywasz</UserDescription>
                            <UserDescriptionSmall>Jak się nazywasz</UserDescriptionSmall>
                            <Input
                                placeholder="Podpis"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </AnonymousUser>
                    ) : (
                        <></>
                    )}
                    <FileSection>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => dispatch({ type: ACTIONS.FILES, payload: e.target.files })}
                        />

                        <FilesAlert>{state.filesAlert.showAlert ? state.filesAlert.message : <></>}</FilesAlert>
                    </FileSection>

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
                        <ButtonAddComment name="Submit">
                            <ButtonName>Dodaj opinię</ButtonName>
                        </ButtonAddComment>
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
                </form>
            </WrapperInside>
        </WrapperOutside>
    );
};

export default PopUpAddComment;
