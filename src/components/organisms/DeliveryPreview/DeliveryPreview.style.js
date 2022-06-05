import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 10%;
    margin-bottom: 20px;
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-top: 1px solid grey;
`;

export const Section = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Icon = styled.div`
    margin-right: 20px;
    padding-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const Description = styled.div`
    h5 {
        color: ${({ theme }) => theme.colors.darkGrey};
        line-height: 2px;
    }
    P {
        line-height: 2px;
    }
`;
