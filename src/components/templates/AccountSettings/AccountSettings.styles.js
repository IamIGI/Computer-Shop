import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
`;

export const LeftWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

export const RightWrapper = styled.div`
    border-left: 1px solid grey;
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    display: flex;
    justify-content: left;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
