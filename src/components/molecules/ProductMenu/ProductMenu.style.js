import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px;

    a {
        padding: 10px 2.5%;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xl};
        border-bottom: 2px solid white;
        color: ${({ theme }) => theme.colors.darkGrey};

        :hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.success};
            color: ${({ theme }) => theme.colors.black};
        }
    }
`;
