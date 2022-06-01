import styled from 'styled-components';

export const HotShootWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    padding: 20px;
`;

export const RightTopWrapper = styled.div`
    padding-top: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    grid-column: 2/2;
    display: grid;
    grid-template-rows: 290px 1fr;
`;

export const Advertisement = styled.div`
    width: 100%; //change carousel library, that one is .... no comment
    height: 100%;
    grid-row: 1/2;
    img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
    }
`;

export const Recommended = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 2/2;
`;

export const ProductPrevWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`;
