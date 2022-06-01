import React, { useEffect, useState } from 'react';
import { Title, Wrapper, Image, Description, Price, Timer, GivenTime, DescTimer, Colon } from './HotShootContent.style';
import { HotShoot } from 'data/HotShoot';

const HotShootContent = () => {
    const [counters, setCounters] = useState([1, 2, 3]);

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
        const hours = 23 - date.getHours();
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
        const interval = setInterval(() => {
            TimeToEnd = TimerCount();

            setCounters(TimeToEnd);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Wrapper>
            <Title>
                <h2>Gorący strzał</h2>
            </Title>
            <Image>
                <img src={HotShoot.image} />
            </Image>
            <Description>
                <p>{HotShoot.name}</p>
            </Description>
            <Price>
                <p>
                    <span>{HotShoot.prevPrice},00 zł</span>
                </p>
                <h3>{HotShoot.promoPrice},00 zł</h3>
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
        </Wrapper>
    );
};

export default HotShootContent;
