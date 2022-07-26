import { Button } from 'components/atoms/Button/Button';
import { Bottom } from 'components/organisms/ProductPreview/ProductPreview.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const BottomRegister = styled(Bottom)`
    justify-content: center;

    p {
        font-size: ${({ theme }) => theme.fontSize.m};
        color: ${({ theme }) => theme.colors.darkGrey};
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

// export const offScreen = styled.p`
//     position: absolute;
//     left: -9999px;
// `;

export const UnValid = styled.span`
    color: ${({ theme }) => theme.colors.error};
`;

export const Hide = styled.span`
    display: none;
`;

export const Instructions = styled.div`
    justify-content: center;
    text-align: center;
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.m};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    /* padding: 0.25rem; */
    position: relative;
    bottom: -7px;
    margin-left: 25%;
`;
