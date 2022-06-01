import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 240px;
    width: 40%;
    /* border: 1px solid ${({ theme }) => theme.colors.darkGrey}; */
    border: 1px solid red;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
`;

export const Info1 = styled.div`
    width: 40%;
`;
export const Info2 = styled.div`
    width: 40%;
`;
