import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const Spinner = styled.div`
    @keyframes text-color {
        0% {
            color: rgba(0, 0, 0, 1);
        }

        50% {
            color: rgba(0, 0, 0, 0.5);
        }

        100% {
            color: rgba(0, 0, 0, 0.1);
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    & {
        transform: translate3d(0, 0, 0);
        margin: auto;
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        overflow: hidden;
        position: relative;
        animation: text-color 2s ease-in-out infinite alternate;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 15px solid transparent;
        mix-blend-mode: overlay;
        animation: rotate var(--duration) var(--timing) infinite;
        pointer-events: none;
    }

    &:before {
        border-left-color: ${({ theme }) => theme.colors.successDark};
        --duration: 2.5s;
        --timing: ease-in;
    }

    &:after {
        border-right-color: ${({ theme }) => theme.colors.darkPurple};
        --duration: 5s;
        --timing: ease-in-out;
    }
`;
