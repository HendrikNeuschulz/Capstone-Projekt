import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "JosefinSans";
    src: url("/fonts/JosefinSans-VariableFont_wght.ttf");
       
}
    html,
    body {
      
        padding: 0;
        margin: 0;
        font-family: "JosefinSans";
        background-color: #edede9;
    }

    * {
        box-sizing: border-box;

    }

 

    
`;

export default GlobalStyles;
