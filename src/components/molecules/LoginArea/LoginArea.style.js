import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Bottom } from '../ProductPreviewItem/ProductPreviewItem.style';

export const Wrapper = styled.div`
    margin: auto;
`;

export const BottomLogin = styled(Bottom)`
    /* margin: 10px 0 0 14%; */
    margin-top: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* width: fit-content; */
    padding-top: 0px;
    padding-bottom: 0px;

    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`;

export const WrapButton = styled(Button)`
    margin-left: 15px;
    padding: 10px;
`;

export const ErrMsg = styled.div`
    width: 50%;
    margin-left: 25%;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
`;

export const Instructions = styled.div`
    justify-content: center;
    text-align: center;
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    position: relative;
    bottom: -7px;
    margin-left: 25%;
`;
