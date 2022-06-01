import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 690px 1fr 300px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const TopWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 430px 1fr;
`;
export const MidWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 430px;
`;
export const BottomWrapper = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%;
    grid-row: 3/3;
`;
