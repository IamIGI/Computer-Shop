import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;
`;

export const LeftWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

export const RightWrapper = styled.div`
    border-left: 1px solid grey;
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    display: flex;
    justify-content: left;
    flex-direction: column;
`;

// export const AccountMenu = styled.div``;

export const AccountData = styled.div``;

export const AccountEntitlements = styled.div``;

export const DeleteAccount = styled.div``;
