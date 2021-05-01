import styled from 'styled-components';
import { BsPeopleCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

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