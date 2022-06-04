import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;
    padding: 30px;
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const InputLocal = styled(Input)`
    display: block;
    width: 50%;
    font-size: 16px;
    height: 40px;
    margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
    justify-content: right;
    text-align: right;
    margin-right: 50%;
`;
