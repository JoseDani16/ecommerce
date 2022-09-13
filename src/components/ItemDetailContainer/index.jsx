import styled from "@emotion/styled";
import React, { useState } from "react";
import { Productos } from "../../services/fakeProductsAPI";
import ItemDetail from "./components/ItemDeatail";

const ItemDetailContainer = () => {
  const [producto, setItem] = useState(null);

  const promesita = () => new Promise((resolve) => setTimeout(resolve, 2000));
  promesita().then(() => getItem());

  const getItem = () => {
    setItem(Productos.find((item) => item.id === 0));
  };

  return (
    <Container>
      {producto ? (
        <ItemDetail
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          description={producto.description}
          stock={producto.stock}
          imgURL={producto.pictureURL}
          altImg={producto.alt}
        />
      ) : (
        "Cargando..."
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default ItemDetailContainer;
