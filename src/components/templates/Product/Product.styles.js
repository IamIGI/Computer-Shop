import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;

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
    display: grid;
    grid-template-columns: 630px 1fr;
    margin-bottom: 30px;
`;

export const MidWrapper = styled.div`
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const BottomWrapper = styled.div`
    height: 100%;
    width: 100%;
`;
