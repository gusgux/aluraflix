import { createGlobalStyle } from "styled-components";
import { GRAYCOLORS } from "./color";

const GlobalStyle = createGlobalStyle`
    :root{
        background: ${GRAYCOLORS.light};
        width: 1240px;
        margin: 0 auto;
        font-family: "Roboto", sans-serif;
;
        
        
    }
`;
export default GlobalStyle;
