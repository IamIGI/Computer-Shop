import styled from 'styled-components';

export const List = styled.ul`
    li {
        list-style: none;
    }

    li:nth-child(2n) {
        background-color: ${({ theme }) => theme.colors.lightPurple};
    }
`;

export const LiWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 7px 0;
`;

export const LiName = styled.div`
    width: 35%;
    padding-left: 7%;
    /* border: 1px solid green; */
`;
export const LiDesc = styled.div`
    width: 40%;
    /* border: 1px solid blue; */
    p {
        line-height: 12px;
    }
`;

export const DescWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const IconTitle = styled.div`
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;

export const ContentTitle = styled.div`
    padding-top: 7px;
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const Line = styled.div`
    margin-left: 30px;
    width: 95%;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey}; ;
`;
