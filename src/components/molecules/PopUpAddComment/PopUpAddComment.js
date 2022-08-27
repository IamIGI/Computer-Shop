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

const PopUpAddComment = ({ name, prevImg, productId }) => {
    const { auth } = useAuth();
    const [rating, setRating] = useState(0);
    const [userName, setUserName] = useState('');
    const [opinion, setOpinion] = useState('');
    const [sendComment, setSendComment] = useState(false);
    const [alert, setAlert] = useState([false, '']);

    useEffect(() => {
        setAlert([false, '']);
        console.log(`userName: ${userName.length} \n opinion: ${opinion.length} \n rating: ${rating} `);
        userName.length === 0 && setAlert(true, 'Brakujące pole - Podpis');
        opinion.length <= 10 && setAlert(true, 'Brakujące pole - Opinia (min. 10 znaków)');
        rating === 0 && setAlert(true, 'Minimalna ocena to 1');
    }, [sendComment]);

    if (sendComment) {
        // setAlert([false, '']);

        console.log(`Alert: ${alert}`);
        if (alert[0]) {
            setAlert([false, '']);
            setSendComment(false);
        } else {
            const data = {
                productId,
                userId: auth.id,
                userName,
                content: {
                    rating,
                    description: opinion,
                },
            };
            console.log(data);

            setOpinion('');
            setUserName('');
            setRating('');
            setSendComment(false);
        }
    }

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
                    {alert[0] ? <Alert>{alert[1]}</Alert> : <></>}
                </AddComment>
            </WrapperInside>
        </WrapperOutside>
    );
};

export default PopUpAddComment;
