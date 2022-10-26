import styled from 'styled-components';

export const Slider = styled.div`
    /* background-color: white; */
    height: 300px;
    overflow: hidden;
    position: relative;
    width: 1400px;
    padding-top: 17px;
    /* border: 1px solid red; */
    z-index: 1;

    &::before,
    &::after {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        content: '';
        height: 300px;
        position: absolute;
        width: 75px;
        z-index: 2;
    }

    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    &::before {
        left: 0;
        top: 0;
    }
`;

export const SlideTrack = styled.div`
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        45% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-33.3%);
        }
        95% {
            transform: translateX(-33.3%);
        }
        100% {
            transform: translateX(-66.6%);
        }
    }

    animation: scroll 20s linear infinite;
    display: flex;
    width: calc(1400px * 3); // for 2 slides
    gap: 15px;

    :hover {
        animation-play-state: paused;
    }
`;

export const Slide = styled.div`
    height: 290px;
    width: 1385px;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    padding: 0 50px;
`;
