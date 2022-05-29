import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* justify-content: center;
    text-align: center; */
    display: grid;
    grid-template-rows: 550px 1fr;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
export const TopWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 630px 1fr;
`;

export const CarouselBox = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
    grid-column: 1/2;
`;

export const TopInsideWrapper = styled.div`
    border: 1px solid yellow;
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    display: grid;
    grid-template-rows: 150px 1fr;
`;

export const Title = styled.div`
    border: 1px solid blue;
    height: 100%;
    width: 100%;
    grid-row: 1/2;
`;

export const DataBuyWrapper = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 100%;
    grid-row: 2/2;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`;
export const PrevData = styled.div`
    border: 1px solid pink;
    height: 100%;
    width: 100%;
    grid-column: 1/2;
`;
export const BuySelector = styled.div`
    border: 1px solid brown;
    height: 100%;
    width: 100%;
    grid-column: 2/2;
`;

export const BottomWrapper = styled.div`
    /* border: 1px solid orange; */
    height: 100%;
    width: 100%;
    grid-row: 2/2;
    display: grid;
    grid-template-rows: 100px 300px;
`;

export const MenuSector = styled.div`
    border: 1px solid orange;
    height: 100%;
    width: 100%;
    grid-row: 1/2;
`;

export const AboutProductSector = styled.div`
    border: 2px solid black;
    height: 100%;
    width: 100%;
    grid-row: 2/2;
    display: flex;
    flex-direction: column;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px;

    a {
        padding: 10px 2.5%;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xl};
        border-bottom: 2px solid white;

        :hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.success};
        }
    }
`;

export const Description = styled.div`
    width: 70%;
    margin-left: 10%;
    margin-bottom: 10%;

    p {
        line-height: 30px;
    }

    img {
        margin-left: 10%;
        width: 80%;
    }
`;

export const Specification = styled.div`
    margin-left: 7%;
    margin-bottom: 2%;
    width: 86%;
    span {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-weight: 700;
    }
`;

export const Separator = styled.hr`
    width: 70%;
`;
