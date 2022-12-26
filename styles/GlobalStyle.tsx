import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.bgColor};
        color : ${(props) => props.theme.textColor}
    }
    main {
    padding: 20px;
    }
    h1,
    h2,
    h3 {
    font-weight: bold;
    }
    h1 {
        font-size: 32px;
    }
    p {
        line-height: 1.8rem;
        font-size: 1.1rem;
        word-break: keep-all;
    }
`;
