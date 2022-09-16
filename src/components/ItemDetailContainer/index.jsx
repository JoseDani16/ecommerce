import styled from "@emotion/styled";
import React, { useState } from "react";
import { Productos } from "../../services/fakeProductsAPI";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ItemDetailContainer = () => {
  const { idDelProducto } = useParams();
  const [producto, setItem] = useState(null);

  const promesita = () => new Promise((resolve) => setTimeout(resolve, 2000));
  promesita().then(() => getItem());

  const getItem = () => {
    let producto = Productos.find(
      (item) => item.id === parseInt(idDelProducto)
    );
    setItem(producto);
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

export default ItemDetailContainer;
