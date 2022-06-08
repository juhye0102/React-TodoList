import React from "react";
import styled from "styled-components";

import ListTitle from "./ListTitle";
import ListInsert from "./ListInsert";
import ListItem from "./ListItem";

function TodoTemplate() {
  return (
    <Container>
      <ListTitle>TODO LIST</ListTitle>
      <ListInsert />
      <ListItem />
    </Container>
  );
}
