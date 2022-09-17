import styled from 'styled-components';

export const Wrapper = styled.div`
    line-height: 26px;
    padding: 1% 0;
`;

export const UnWrap = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    :hover {
        color: black;
        cursor: pointer;
    }
`;
