import React from "react";
import styled from "styled-components";

function ListInsert() {
  return (
    <Container>
      <form>
        <TextInput type="text" name="text" placeholder="이 곳에 작성하세요." />
        <AddButton type="submit">추가</AddButton>
      </form>
    </Container>
  );
}
