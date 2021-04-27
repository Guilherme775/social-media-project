import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    width: fit-content;
    top: 40px;
    right: 48px;

    @media screen and (max-width: 576px) {
        top: 24px;
        right: 32px;
    }
`;