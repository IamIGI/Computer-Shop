import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 10px;
    /* border: 1px solid red; */
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
`;

export const Title = styled.div`
    padding-top: 7px;
    padding-right: 15px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;
`;
export const NumberOfComments = styled.div`
    margin-right: 5%;
    padding-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;
`;

export const Filters = styled.div`
    /* border: 1px solid ${({ theme }) => theme.colors.lightGrey}; */
`;

export const Confirmed = styled.div`
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;

export const ConfirmedDesc = styled.div`
    margin-top: 7px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;

    :hover {
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    transform: scale(1.8);
    margin: 8px 10px 0 10px;
    height: 20px;
    width: auto;
    /* border-radius: 16px; */
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;

export const Sort = styled.div``;
