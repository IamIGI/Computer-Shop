import React, { useEffect, useState } from 'react';
import { Title, Wrapper, Image, Description, Price, Timer, GivenTime, DescTimer, Colon } from './HotShootContent.style';
import { getHotShootPromotion } from '../../../api/products';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { Link } from 'components/atoms/Link/Link';

const HotShootContent = () => {
    const [counters, setCounters] = useState([1, 2, 3]);
    const [isFetchHotShoot, setIsFetchHotShoot] = useState(true);
    const [hotShoot, setHotShoot] = useState({});

    const isZeroNeeded = (time, timeToEnd) => {
        if (time < 10) {
            timeToEnd = '0' + timeToEnd;
        }
        return timeToEnd;
    };

    const TimerCount = () => {
        const date = new Date();
        const seconds = 60 - date.getSeconds();
        const minutes = 60 - date.getMinutes();
        let hours = 0;
        if (date.getHours() >= 22 && date.getHours() <= 23) {
            hours = 33 - date.getHours();
        } else if (date.getHours() >= 0 && date.getHours() <= 9) {
            hours = 9 - date.getHours();
        } else {
            hours = 21 - date.getHours();
        }
        let hoursToEnd = hours.toString();
        let secondsToEnd = seconds.toString();
        let minutesToEnd = minutes.toString();

        secondsToEnd = isZeroNeeded(seconds, secondsToEnd);
        minutesToEnd = isZeroNeeded(minutes, minutesToEnd);
        hoursToEnd = isZeroNeeded(hours, hoursToEnd);

        return [hoursToEnd, minutesToEnd, secondsToEnd];
    };

    var TimeToEnd = TimerCount();

    useEffect(() => {
        const fetchHotShoot = async () => {
            setIsFetchHotShoot(true);
            const response = await getHotShootPromotion();
            setHotShoot(response);
            setIsFetchHotShoot(false);
        };

        fetchHotShoot();

        const interval = setInterval(async () => {
            TimeToEnd = TimerCount();

            //setNew hot shoot promotion
            if (TimeToEnd[0] == '11' && TimeToEnd[1] == '59' && TimeToEnd[2] == '55') {
                setIsFetchHotShoot(true);
                const response = await getHotShootPromotion();
                setHotShoot(response);
                setIsFetchHotShoot(false);
            }
            setCounters(TimeToEnd);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
