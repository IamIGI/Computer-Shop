import { useEffect, useState } from 'react';
import { Title, Wrapper, Image, Description, Price, Timer, GivenTime, DescTimer, Colon } from './HotShootContent.style';
import { getHotShootPromotion } from 'api/hotShoot';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { Link } from 'components/atoms/Link/Link';
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
                <LoadingAnimation />
            ) : (
                <>
                    <Link to={`/product/${hotShoot.productData._id}`}>
                        <Title>
                            <h2>Gorący strzał</h2>
                        </Title>
                        <Image>
                            <img src={hotShoot.productData.prevImg} />
                        </Image>
                        <Description>
                            <p>{hotShoot.productData.name}</p>
                        </Description>
                        <Price>
                            <p>
                                <span>{hotShoot.productData.price},00 zł</span>
                            </p>
                            <h3>{hotShoot.productData.price - hotShoot.productData.special_offer.price},00 zł</h3>
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
                    </Link>
                </>
            )}
        </Wrapper>
    );
};

export default HotShootContent;
