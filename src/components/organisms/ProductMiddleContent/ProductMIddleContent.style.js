import styled from 'styled-components';

export const MenuSector = styled.div`
    height: 100px;
    width: 100%;
`;

export const AboutProductSector = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Description = styled.div`
    width: 70%;
    margin-left: 10%;
    margin-bottom: 10%;

    p {
        line-height: 30px;
    }

    img {
        margin-left: 10%;
        width: 80%;
    }
`;

export const Specification = styled.div`
    margin-left: 7%;
    margin-bottom: 2%;
    width: 86%;
    span {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-weight: 700;
    }
`;
