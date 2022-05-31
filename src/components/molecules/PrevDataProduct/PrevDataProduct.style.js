import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 5%;
    color: 2px solid ${({ theme }) => theme.colors.grey};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fontSize.m_plus};

        :hover {
            color: ${({ theme }) => theme.colors.black};

            span {
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme.colors.success};
            }
        }
    }

    a span {
        padding: 5px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    p {
        margin-left: 17px;
        color: 2px solid ${({ theme }) => theme.colors.grey};
    }

    ul {
        list-style: none;
    }
    li {
        margin: 7px 0;
    }

    span {
        margin-right: 10px;
        text-decoration: underline;
    }
`;
