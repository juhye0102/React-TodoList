import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body { 
    background: #e9ecef;
    margin: 0;
    padding: 5%;
  }
  `;

export default GlobalStyle;
