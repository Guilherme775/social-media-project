import styled from 'styled-components';

type Props = {
    darkMode?: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 30% 70%;
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: var(--primary);
    padding: 20px;
`;

export const Image = styled.img`
    width: 100%;
`;

export const FormContainer = styled.div<Props>`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.darkMode ? '#020024' : '#FFFFFF'};
`;

export const Form = styled.div`
    width: fit-content;
    display: grid;
    place-items: center;
    row-gap: 24px;
`;

export const Title = styled.h1<Props>`
    font-family: 'Roboto';
    font-size: 52px;
    font-weight: 700;
    color: ${(props) => props.darkMode ? '#FFFFFF' : '#333237'};
`;