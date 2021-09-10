import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 40px;

    @media screen and (max-width: 912px) {
        column-gap: 12px;
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 72px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};

    @media screen and (max-width: 912px) {
        font-size: 32px;
    }
`;

export const Image = styled.img`
    width: 180px;
    height: 180px;

    @media screen and (max-width: 912px) {
        width: 90px;
        height: 90px;
    }
`;
