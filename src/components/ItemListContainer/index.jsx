import styled from "@emotion/styled";
import React from "react";
import Counter from "./components/ItemCount";

const ContainerCatalogo = styled.div``;

const ItemListContainer = ({ greetings }) => {
  return (
    <>
      <ContainerCatalogo>{greetings}</ContainerCatalogo>
      <Counter stock={8} />
    </>
  );
};

export default ItemListContainer;
