import styled from 'styled-components';

export const NormalScreenSize = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

export const SmallScreenSize = styled.div`
    display: none;
    @media screen and (max-width: 1100px) {
        padding-top: 15px;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const RightTopWrapper = styled.div`
    padding-top: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Advertisement = styled.div`
    width: 100%; //change carousel library, that one is .... no comment
    height: 280px;
    img {
        width: 100%;
        height: 280px;
        border-radius: 70px;
    }
`;

export const Recommended = styled.div`
    width: 100%;
    height: 100%;
`;

export const ProductPrevWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
        align-items: center;
        flex-direction: column;
    }
`;
