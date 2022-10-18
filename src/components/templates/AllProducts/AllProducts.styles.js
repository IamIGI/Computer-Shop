import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
    }
`;

export const Products = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-evenly;
    align-content: flex-start;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
