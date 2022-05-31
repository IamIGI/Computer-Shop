import styled from 'styled-components';

export const Wrapper = styled.div`
    h1 {
        margin-left: 20px;
        line-height: 40px;
    }

    p {
        margin-left: 20px;
        font-size: ${({ theme }) => theme.fontSize.l};
        color: grey;
        padding-bottom: 1%;
    }

    span {
        color: black;
        font-weight: 700;
    }
`;
