import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--primary);
    padding: 24px;
    display: grid;
    grid-template-columns: 30% 70%;

    @media screen and (max-width: 1180px) {
        grid-template-columns: 1fr;
        grid-template-rows: 15% 85%;
        padding: 0;
    }
`;
