import { useEffect, useState } from 'react';
import {
    Title,
    Wrapper,
    Image,
    Description,
    Price,
    Timer,
    GivenTime,
    DescTimer,
    Colon,
    ProductDescription,
    PromoDescription,
    InsideWrapper,
} from './HotShootContent.style';
import { getHotShootPromotion } from 'api/hotShoot';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { TimerCount } from './HotShootContent.logic';
import useRefresh from 'hooks/useRefresh';

const HotShootContent = () => {
    const [counters, setCounters] = useState([1, 2, 3]);
    const [isFetchHotShoot, setIsFetchHotShoot] = useState(true);
    const [hotShoot, setHotShoot] = useState({});
    const { refresh } = useRefresh();

    useEffect(() => {
        const fetchHotShoot = async () => {
            setIsFetchHotShoot(true);
            const response = await getHotShootPromotion();
            setHotShoot(response);
            setIsFetchHotShoot(false);
        };

        fetchHotShoot();

        const interval = setInterval(async () => {
            setCounters(TimerCount());
        }, 1000);

        return () => clearInterval(interval);
    }, [refresh]);

    return (
        <Wrapper>
            {isFetchHotShoot ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
                <InsideWrapper to={`/product/${hotShoot.productData._id}`}>
                    <ProductDescription>
                        <Title>
                            <h2>Gorący strzał</h2>
                        </Title>
                        <Image>
                            <img src={hotShoot.productData.prevImg} alt="product" />
                        </Image>
                        <Description>{hotShoot.productData.name}</Description>
                    </ProductDescription>
                    <PromoDescription>
                        <Price>
                            <p>
                                <span>{hotShoot.productData.price} zł</span>
                            </p>
                            <h3>{hotShoot.productData.price - hotShoot.productData.special_offer.price} zł</h3>
                        </Price>
                        <DescTimer>
                            <h3>
                                Następny <span>HotShoot</span> za:
                            </h3>
                        </DescTimer>
                        <Timer>
                            <GivenTime>{counters[0]}</GivenTime>
                            <Colon>:</Colon>
                            <GivenTime>{counters[1]}</GivenTime>
                            <Colon>:</Colon>
                            <GivenTime>{counters[2]}</GivenTime>
                        </Timer>
                    </PromoDescription>
                </InsideWrapper>
            )}
        </Wrapper>
    );
};

export default HotShootContent;
