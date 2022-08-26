import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 70%;
    margin-left: 10%;
    padding-left: 30px;
    display: inline-grid;
    flex-direction: column;
    justify-content: flex-start;
    /* z-index: 1; */
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const LabelArea = styled.div`
    width: 100px;
    border-right: 1px solid grey;
    text-align: center;
    justify-content: center;
    padding-top: 5px;
`;

export const SectionChange = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Label = styled.div``;

export const InputLocal = styled(Input)`
    color: black;
    margin: 0px;
    margin-left: 10px;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.success};
    }
`;

export const PopUpTitle = styled.div;

export const ButtonLocal = styled(Button)`
    margin: 0px;
    margin-left: 10px;
`;
