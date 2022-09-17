import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
`;

export const Products = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 2/3;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-evenly;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
