import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 5% 1fr 300px;
    border: 1px solid red;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 2/3;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* top | right | bottom | left */
    padding: 0 150px 0 5%;
`;

export const Prev = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 3/3;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;
