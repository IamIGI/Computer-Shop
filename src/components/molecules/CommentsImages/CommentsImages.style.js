import styled from 'styled-components';

export const OutsideWrapper = styled.div`
    position: relative;
    max-width: 1220px;
    width: 100%;
    margin-left: 4%;
    margin-right: 20px;
    //leave it, so you know how to calculated with props
    /* width: calc(${(props) => props.numberOfImages} * 90px + (${(props) => props.numberOfImages}-1) * 20px); */

    margin: left;
    margin-bottom: 27px;

    @media screen and (max-width: 1375px) {
        max-width: 1000px;
    }

    @media screen and (max-width: 1150px) {
        max-width: 670px;
        margin: auto;
    }

    @media screen and (max-width: 800px) {
        max-width: 450px;
    }

    @media screen and (max-width: 515px) {
        max-width: 350px;
    }

    @media screen and (max-width: 420px) {
        max-width: 280px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    padding: 3px 15px 3px 15px;
    margin-bottom: 23px;
    margin: auto;
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
`;

export const ScrollButton = styled.div`
    z-index: 3;
    width: 40px;
    height: 40px;
    background-color: rgba(189, 195, 199, 0.6);
    color: black;
    border-radius: 25%;
    position: absolute;
    top: 29px;
    ${(props) => (props.direction === 'right' ? 'right: 0;' : 'left: 0;')}

    display: ${(props) => (props.width > 1200 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    font-weight: 700;

    transform: scale(1, 1);
    transition: transform 0.5s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.2, 1.2);
        background-color: rgba(189, 195, 199, 0.7);
    }

    @media screen and (max-width: 1000px) {
        display: ${(props) => (props.width > 1000 ? 'flex' : 'none')};
    }

    @media screen and (max-width: 800px) {
        display: ${(props) => (props.width > 800 ? 'flex' : 'none')};
    }

    @media screen and (max-width: 515px) {
        display: ${(props) => (props.width > 515 ? 'flex' : 'none')};
        top: 21px;
        width: 35px;
        height: 35px;
    }
`;

export const Image = styled.img`
    height: 90px;
    max-width: 90px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
        cursor: pointer;
    }

    @media screen and (max-width: 515px) {
        height: 70px;
        max-width: 70px;
    }
`;
