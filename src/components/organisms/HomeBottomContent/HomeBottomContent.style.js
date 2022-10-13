import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const InsideWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 12px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;

    @media screen and (max-width: 1100px) {
        align-items: center;
        flex-direction: column;
    }
`;
