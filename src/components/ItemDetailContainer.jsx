import styled from "@emotion/styled";
import React, { useState } from "react";
import { Productos } from "../services/fakeProductsAPI";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemById, getItems } from "../App/api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemDetailContainer = () => {
  const { keyDelProducto } = useParams();
  const [producto, setItem] = useState(null);

  getItemById(keyDelProducto).then((res) => setItem(res));

  return (
    <Container>
      {producto ? <ItemDetail data={producto} /> : "Cargando..."}
    </Container>
  );
};

export default ItemDetailContainer;
