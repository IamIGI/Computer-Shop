import styled from 'styled-components';

export const Wrapper = styled.div`
    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }
    height: 100%;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    /* grid-template-rows: 100px 220px 100px 100px 150px; */

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
        cursor: pointer;

        h2 {
            color: red;
        }
    }
`;

export const Title = styled.div`
    margin-top: -50px;
    margin-left: 20px;
    text-align: left;
`;

export const Image = styled.div`
    margin-top: -20px;
    img {
        width: 300px;
    }
`;

export const Description = styled.div`
    margin: 0 15px;
    p {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const Price = styled.div`
    margin-top: -10px;
    span {
        text-decoration: line-through;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
export const DescTimer = styled.div`
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        span {
            color: red;
        }
    }
`;
export const Timer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const GivenTime = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0 10px;
    padding-top: 17px;
    width: 70px;
    height: 70px;
`;

export const Colon = styled.div`
    margin-top: 9px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;
