import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;
    overflow-y: scroll;
    padding: 0px 3% 50px 3%;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    line-height: 27px;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const Title = styled.div`
    width: 100%;
    margin: 40px 0 20px 0;
`;

export const Description = styled.div``;
