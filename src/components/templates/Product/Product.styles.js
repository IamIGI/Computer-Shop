import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 600px 1fr;

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

export const BottomWrapper = styled.div`
    /* border: 1px solid orange; */
    height: 100%;
    width: 100%;
    grid-row: 2/2;
    display: grid;
    grid-template-rows: 100px 1fr;
`;
