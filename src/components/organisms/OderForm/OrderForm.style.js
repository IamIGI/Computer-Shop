import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 47%;
`;

export const InputLocal = styled(Input)`
    display: block;
    width: 90%;
    font-size: 16px;
    height: 40px;
    margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
    justify-content: left;
    margin-left: 4%;
`;

export const Error = styled.div`
    margin-left: 5%;
`;
