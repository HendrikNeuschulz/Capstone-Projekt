import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "JosefinSans";
    src: url("/fonts/Caveat-VariableFont_wght.ttf");
       
}
    html,
    body {
      
        padding: 0;
        margin: 0;
        font-family: "JosefinSans";
        background-color: #e8e1d1;
    }

    * {
        box-sizing: border-box;

    }

 

    
`;

export default GlobalStyles;
