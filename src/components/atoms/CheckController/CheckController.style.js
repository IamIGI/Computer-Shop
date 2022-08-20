import styled from 'styled-components';

export const WrapperTop = styled.div`
    padding: 1% 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperBottom = styled.div`
    margin-left: 4.5%;
    margin-right: 1%;
    padding: 0% 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CircleCheck = styled.div`
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Description = styled.div`
    margin-top: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const Line = styled.div`
    margin: 0% 1%;
    width: 20%;
    margin-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
