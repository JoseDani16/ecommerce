import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      setProductosCargados(Productos);
    }, 2000);
  }, []);

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
