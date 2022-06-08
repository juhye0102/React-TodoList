import React from "react";
import styled from "styled-components";

function Item() {
  return (
    <Container>
      <DoneButton>
        {checked ? <CheckBox src="./img/check.png" /> : null}
      </DoneButton>
      <Topic
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {" "}
        {text}{" "}
      </Topic>
      <DeleteButton>
        <DeleteImg src="./img/trash.png" />
      </DeleteButton>
    </Container>
  );
}
