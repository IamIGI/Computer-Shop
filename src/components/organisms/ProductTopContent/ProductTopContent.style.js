import styled from 'styled-components';

export const CarouselBox = styled.div`
    width: 100%;
    height: 100%;

    grid-column: 1/2;
`;

export const TopInsideWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    display: grid;
    grid-template-rows: 200px 1fr;
`;

export const Title = styled.div`
    padding-top: 20px;
    padding-left: 5%;

    height: 100%;
    width: 100%;
    grid-row: 1/2;
`;

export const DataBuyWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 2/2;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`;
export const PrevData = styled.div`
    padding-top: 5%;

    height: 100%;
    width: 100%;
    grid-column: 1/2;
`;
export const BuySelector = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`;
