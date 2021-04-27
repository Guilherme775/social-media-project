import styled from 'styled-components';
import { BsPeopleCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdLocalPostOffice } from 'react-icons/md';

type Props = {
    darkMode?: boolean;
}

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

export const InfosWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1180px) {
        width: fit-content;
        padding: 24px;
        display: grid;
        align-items: center;
        grid-template-areas: 'Logout Header';
        column-gap: 24px;
    }

    @media screen and (max-width: 767px) {
        column-gap: 16px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;

    @media screen and (max-width: 1180px) {
        grid-area: Header;
    }
`;

export const PeopleIcon = styled(BsPeopleCircle)`
    width: 52px;
    height: 52px;
    color: var(--white);
`;

export const LogoutIcon = styled(BiLogOut)`
    width: 32px;
    height: 32px;
    color: var(--white);
    cursor: pointer;

    @media screen and (max-width: 1180px) {
        grid-area: Logout;
    }

    @media screen and (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 8px;
`;

export const Username = styled.h1`
    font-family: 'Oxygen';
    font-size: 24px;
    font-weight: 400;
    color: var(--white);

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const Email = styled.h1`
    font-family: 'Oxygen';
    font-size: 16px;
    font-weight: 400;
    color: var(--grey);
`;

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