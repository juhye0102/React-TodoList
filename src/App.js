import React from "react";
import { createGlobalStyle } from "styled-components";
import ListItem from "./components/List/ListItem";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #DAC8E8;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle />
      <span>TodoList</span>
      <ListItem />
    </>
  );
}

export default App;
