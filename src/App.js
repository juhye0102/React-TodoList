import React from "react";
import ListItem from "./components/List/ListItem";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ListTemplate />
      </Container>
      <span>TodoList</span>
      <ListItem />
    </>
  );
}

export default App;
