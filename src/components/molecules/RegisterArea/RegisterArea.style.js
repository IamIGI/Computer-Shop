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
