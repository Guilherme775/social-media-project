import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    :root {
        --white: #FFFFFF;
        --black: #333237;
        --success: #47C782;
        --danger: #EB5757;
        --grey: #636E72;
        --primary: #090979;
        --secondary: #020024;
        --light: #00D4FF;
        --xl: 52px;
        --lg: 32px;
        --md: 24px;
        --sm: 12px;
    }
`;