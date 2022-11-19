import styled from 'styled-components';

export const PageButton = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    /* ${({ theme }) => theme.colors.lightLightGrey}; */
    background-color: ${(props) => (props.currentPage ? '#bfbfbf' : '#ededed')};
    margin-left: 10px;
    padding-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.l};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.black};
        box-shadow: 1px 1px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
`;
