import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 40% 60%;

    @media screen and (max-width: 1180px) {
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: var(--primary);
    padding: 20px;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const Image = styled.img`
    width: 100%;

    @media screen and (max-width: 1180px) {
        width: 600px;
        height: 350px;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.wrapper};
`;

export const Form = styled.div`
    width: fit-content;
    display: grid;
    place-items: center;
    row-gap: 24px;
`;

export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 52px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const Container = styled.div`
    width: 250px;
    padding: 4px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.p`
    font-family: 'Oxygen';
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const BlueLink = styled(Link)`
    font-family: 'Oxygen';
    font-size: 12px;
    font-weight: 700;
    color: var(--light);
`;