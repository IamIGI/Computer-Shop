import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 500px;
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* top | right | bottom | left */
    padding: 0 100px 0 5%;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const Prev = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 2/2;
    border-left: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const PrevWrapper = styled.div`
    margin: 20px;
    width: 460px;
    height: auto;
    border: 1px solid grey;
    border-radius: 40px;
`;
