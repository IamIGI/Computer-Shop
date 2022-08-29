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
} from './PopUpAddComment.style';
import { useEffect, useState } from 'react';
import StarRating from 'components/atoms/StarRating/StarRating';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';
import useAuth from 'hooks/useAuth';
import { sendCommentAPI } from 'api/comments';

const PopUpAddComment = ({ name, prevImg, productId, onClose, handleRefresh }) => {
    const alertInit = [false, { userName: '', opinion: '', rating: '' }];

    const { auth } = useAuth();
    const [rating, setRating] = useState(0);
    const [userName, setUserName] = useState(Boolean(auth.userName) ? auth.userName : '');
    const [opinion, setOpinion] = useState('');
    const [sendComment, setSendComment] = useState(false);
    const [alert, setAlert] = useState(alertInit);

    useEffect(() => {
        console.log('here');
        if (sendComment) {
            console.log('here2');
            if (userName.length !== 0 && opinion.length > 10 && rating !== 0) {
                const sendData = async () => {
                    const data = {
                        productId,
                        userId: Boolean(auth.id) ? auth.id : '',
                        userName,
                        content: {
                            rating,
                            description: opinion,
                        },
                    };

                    console.log(data);
                    try {
                        const response = await sendCommentAPI(data);
                        console.log(response);
                    } catch (err) {
                        if (err.response) {
                            console.log(err.response.data);
                            console.log(err.response.status);
                            console.log(err.response.headers);
                        } else {
                            console.log(`Error: ${err.message}`);
                        }
                    }

                    console.log(`Data send successfully`);
                    handleRefresh();
                };

                sendData();
                setAlert(alertInit);
                setSendComment(false);
                onClose();
            } else {
                console.log('Data is bad');
                setAlert([...alert, (alert[0] = true)]);
                userName.length === 0
                    ? setAlert([...alert, (alert[1].userName = 'Brakujące pole - Podpis')])
                    : setAlert([...alert, (alert[1].userName = '')]);
                opinion.length <= 10
                    ? setAlert([...alert, (alert[1].opinion = 'Brakujące pole - Opinia (min. 10 znaków)')])
                    : setAlert([...alert, (alert[1].opinion = '')]);
                rating === 0
                    ? setAlert([...alert, (alert[1].rating = 'Minimalna ocena to 1')])
                    : setAlert([...alert, (alert[1].rating = '')]);
                setSendComment(false);
            }
        }
    }, [sendComment]);

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <WrapperOutside>
            <Title>Dodaj opinię</Title>
            <WrapperInside>
                <ProductDescription>
                    <Image>
                        <img src={prevImg} alt="Photo of a product" />
                    </Image>
                    <ProductName>
                        <p>{name}</p>
                    </ProductName>
                </ProductDescription>
                <Rating>
                    <Description>Oceń produkt</Description>
                    <RatingStars>
                        <StarRating rating={rating} handleRating={handleRating} />
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
                <TextArea placeholder="Opinia" value={opinion} onChange={(e) => setOpinion(e.target.value)}></TextArea>
                <AddComment>
                    <div>
                        <BuyButton onClick={() => setSendComment(true)}>
                            <p>Dodaj opinię</p>
                        </BuyButton>
                    </div>
                    {alert[0] ? (
                        <Alert>
                            {alert[1].userName !== '' && (
                                <>
                                    {alert[1].userName}
                                    <br />
                                </>
                            )}
                            {alert[1].opinion !== '' && (
                                <>
                                    {alert[1].opinion}
                                    <br />
                                </>
                            )}
                            {alert[1].rating !== '' && <>{alert[1].rating}</>}
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