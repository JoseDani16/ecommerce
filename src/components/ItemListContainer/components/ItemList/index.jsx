import styled from "@emotion/styled";
import React, { useState } from "react";
import { Productos } from "../../../../services/fakeProductsAPI";
import Item from "./components/Item";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ItemList = () => {
  const [productosCargados, setProductosCargados] = useState(null);

  const promesita = () => new Promise((resolve) => setTimeout(resolve, 2000));

  promesita().then(() => setProductosCargados(Productos));
  return (
    <Container>
      {productosCargados
        ? productosCargados.map((producto) => (
            <Item
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.pictureURL}
              description={producto.description}
            />
          ))
        : "Cargando..."}
    </Container>
  );
};

export default ItemList;
