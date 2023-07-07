import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        margin: 0;
        font-family: 'Noto Sans KR Black';
    }
`;

