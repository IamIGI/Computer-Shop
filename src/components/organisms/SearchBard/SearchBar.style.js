import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
    grid-row: 1/2; //start from row border 1 end on row border 2
    grid-column: 2/3; //start from column border 2 and on column border 3
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;

    ${Input} {
        font-size: ${({ theme }) => theme.fontSize.xl};
        width: 100%;
        max-width: 350px;
        border: none;
    }
`;

export const StatusInfo = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 40px;

    p {
        margin: 5px;
    }
`;
