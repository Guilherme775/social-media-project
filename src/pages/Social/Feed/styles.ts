import styled from 'styled-components';
import { BsPeopleCircle } from "react-icons/bs";
import { MdLocalPostOffice } from 'react-icons/md';

type Props = {
    darkMode?: boolean;
}

export const FeedWrapper = styled.div<Props>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.darkMode ? '#020024' : '#FFFFFF'};
    border-radius: 50px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1180px) {
        border-radius: unset;
        padding: 24px;
    }
`;

export const Title = styled.h1<Props>`
    font-family: 'Roboto';
    font-size: 52px;
    font-weight: 700;
    color: ${(props) => props.darkMode ? '#FFFFFF' : ''};

    @media screen and (max-width: 767px) {
        font-size: 32px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
`;

export const PostIcon = styled(MdLocalPostOffice) <Props>`
    width: 52px;
    height: 52px;
    color: ${(props) => props.darkMode ? '#FFFFFF' : ''};

    @media screen and (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;

export const Input = styled.input<Props>`
    width: 100%;
    border: none;
    outline: none;
    background-color: ${(props) => props.darkMode ? '#020024' : ''};
    color: ${(props) => props.darkMode ? '#FFFFFF' : ''};
`;

export const SubmitWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const PostWrapper = styled.div`
    width: 100%;
    display: grid;
    row-gap: 12px;
`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;

export const DarkPeopleIcon = styled(BsPeopleCircle) <Props>`
    width: 52px;
    height: 52px;
    color: ${(props) => props.darkMode ? '#FFFFFF' : ''};

    @media screen and (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;

export const Name = styled.h1<Props>`
    font-family: 'Oxygen';
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => props.darkMode ? '#FFFFFF' : ''};
`;

export const Post = styled.h1<Props>`
    font-family: 'Oxygen';
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => props.darkMode ? '#FFFFFF' : '#333237'};

    @media screen and (max-width: 767px) {
        font-size: 16px;   
    }
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;