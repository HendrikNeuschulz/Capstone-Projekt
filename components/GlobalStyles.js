import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
   

    font-family: "oswald";
    src: url("/fonts/Oswald-VariableFont_wght.ttf");
       
}

@font-face {
    font-family: "Caveat";
    src: url("/fonts/Caveat-VariableFont_wght.ttf");
}
    html,
    body {
      
      
        font-family: "Caveat";
        background-color:#e8e1d1;
        padding: 0;
        margin: 0;
        
    }

    * {
        box-sizing: border-box;
    
    }

    main {
        margin-bottom: 100px;
        padding: 0 20px;
    }

 

    
`;

export default GlobalStyles;
