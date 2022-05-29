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
    flex-direction: flex-start;
    padding: 7px 0;
`;

export const LiName = styled.div`
    width: 400px;
    padding-left: 100px;
    /* border: 1px solid green; */
`;
export const LiDesc = styled.div`
    width: 600px;
    /* border: 1px solid blue; */
    p {
        line-height: 10px;
    }
`;
