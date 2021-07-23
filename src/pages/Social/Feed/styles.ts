import styled from 'styled-components';
import { BsPeopleCircle } from "react-icons/bs";
import { MdLocalPostOffice } from 'react-icons/md';

export const FeedWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.wrapper};
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

export const Title = styled.h1`
    font-family: 'Roboto';
    font-size: 52px;
    font-weight: 700;
    color: ${({ theme }) => theme.title};

    @media screen and (max-width: 767px) {
        font-size: 32px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
`;

export const PostIcon = styled(MdLocalPostOffice)`
    width: 52px;
    height: 52px;
    color: ${({ theme }) => theme.title};

    @media screen and (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.title};

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.title};
    }

    :-ms-input-placeholder {
        color: ${({ theme }) => theme.title};
    }
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

export const DarkPeopleIcon = styled(BsPeopleCircle)`
    width: 52px;
    height: 52px;
    color: ${({ theme }) => theme.title};

    @media screen and (max-width: 767px) {
        width: 32px;
        height: 32px;
    }
`;

export const Name = styled.h1`
    font-family: 'Oxygen';
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.title};
`;

export const Post = styled.h1`
    font-family: 'Oxygen';
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};

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