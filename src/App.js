import React from "react";
import ListItem from "./components/List/ListItem";
import GlobalStyle from "./style/GlobalStyle";

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
