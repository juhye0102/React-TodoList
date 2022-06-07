import React from "react";
import { createGlobalStyle } from "styled-components";
import ListItem from "./components/List/ListItem";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #e9ecef;
  }
  `;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodolistBox />
      <span>TodoList</span>
      <ListItem />
    </>
  );
}

export default App;
