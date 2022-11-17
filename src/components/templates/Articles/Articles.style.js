import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 96%;
    height: 100%;
    padding: 30px 2% 50px 2%;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    @media screen and (max-width: 500px) {
        width: 98%;
        padding: 30px 1% 50px 1%;
    }
`;

export const Menu = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-left: 10px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
    height: fit-content;

    @media screen and (max-width: 500px) {
        gap: 10px;
    }
`;

export const MenuOption = styled(NavLink)`
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    padding: 0px 10px;
    color: black;
    text-decoration: none;

    ${(props) => {
        switch (props.hoverClass) {
            case 'MenuHover1':
                return `
                &:hover .MenuHover1 {
                    display: flex;
                }
                &.active .MenuHover1 {
                    display: flex;
                    background-color: green;
                }
                &:hover .MenuNoHover1 {
                    display: none;
                }
                &.active .MenuNoHover1 {
                    display: none;
                }
                `;
            case 'MenuHover2':
                return `
                &:hover .MenuHover2 {
                    display: flex;
                }
                &.active .MenuHover2 {
                    display: flex;
                    background-color: green;
                }
                &:hover .MenuNoHover2 {
                    display: none;
                }
                &.active .MenuNoHover2 {
                    display: none;
                }
                `;
            case 'MenuHover3':
                return `
                &:hover .MenuHover3 {
                    display: flex;
                }
                &.active .MenuHover3 {
                    display: flex;
                    background-color: green;
                }
                &:hover .MenuNoHover3 {
                    display: none;
                }
                &.active .MenuNoHover3 {
                    display: none;
                }
                `;
            default:
                return `
                    color: black;
                `;
        }
    }}

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        height: 40px;
    }
`;

export const MenuOptionHover = styled.div`
    display: none;
    margin-top: 6px;
    height: 7px;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #d0d0d0;
`;

export const MenuOptionNoHover = styled.div`
    display: flex;
    margin-top: 6px;
    height: 7px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: transparent;
`;

export const Category = styled.div`
    padding: 0px 0px 0px 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }
`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    gap: 20px;
`;

export const ArticleContainer = styled(NavLink)`
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7px 10px;
    height: 100%;
    max-height: 230px;
    min-height: 230px;
    gap: 10px;
    width: fit-content;
    border-bottom: 1px solid grey;

    @media screen and (max-width: 750px) {
        max-height: 270px;
    }

    :hover {
        cursor: pointer;
        border: 0px;
        box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
        border-radius: 10px;
    }
`;

export const DescriptionContainer = styled.div`
    max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 70%;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin: 0px;
        padding: 0px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }

    @media screen and (max-width: 450px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const Date = styled.div`
    width: 100%;
    align-items: left;
    text-align: left;
    padding-left: 4%;
    color: #989898;

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding-left: 2%;
    }
`;

export const PrevImage = styled.div`
    width: 30%;
    max-width: 300px;
    justify-content: center;
    align-self: center;
    img {
        width: 100%;
        max-height: 200px;
    }
`;
