import React from "react";
// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #DAC8E8;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle />
      
    </>
  );
}

export default App;
