import styled from "@emotion/styled";
import React from "react";
import ItemList from "./components/ItemList";

const ContainerCatalogo = styled.div``;

const ItemListContainer = ({ greetings }) => {
  return (
    <>
      <ContainerCatalogo>{greetings}</ContainerCatalogo>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
