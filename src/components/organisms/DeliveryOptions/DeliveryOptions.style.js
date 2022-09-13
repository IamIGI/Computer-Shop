import styled from 'styled-components';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

export const Wrapper = styled.div`
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;
`;

export const Section = styled.div`
    border: 1px solid white;
    border-radius: 20px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    /* margin-bottom: 20px; */
    justify-content: flex-start;

    :hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.successDark};
    }
`;

export const CheckboxLocal = styled(Checkbox)`
    color: black;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 3%;
    margin-top: 50px;
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const Description = styled.div`
    width: 70%;
    border-left: 1px solid grey;
    text-align: left;
    justify-content: center;
    margin: 10px 0;
    padding-left: 5%;
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const Icon = styled.div`
    padding-top: 40px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;
