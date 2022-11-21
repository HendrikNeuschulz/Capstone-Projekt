import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        display: flex;
        justify-content: center;
       
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: #4CABA6
    }

    * {
        box-sizing: border-box;

    }

    h1 {
        display: flex;
        justify-content: center;
    }

    h2 {
        display: flex;
        justify-content: center; 
    }

    
`;

export default GlobalStyles;
