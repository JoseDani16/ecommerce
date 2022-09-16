import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../../services/fakeProductsAPI";
import Item from "../Item";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ItemList = () => {
  const [productosCargados, setProductosCargados] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState(null);

  const { idCategoria } = useParams();

  useEffect(() => {
    setProductosCargados(null);
  }, [idCategoria]);

  const promesita = () => new Promise((resolve) => setTimeout(resolve, 2000));

  promesita().then(() => setProductosCargados(Productos));

  promesita().then(() =>
    setProductosFiltrados(
      productosCargados?.filter(
        (producto) => producto.categoryId === idCategoria
      )
    )
  );
  let productosAPintar = [];

  if (idCategoria !== undefined) {
    productosAPintar = productosFiltrados;
  } else {
    productosAPintar = productosCargados;
  }

  return (
    <Container>
      {productosAPintar
        ? productosAPintar.map((producto) => (
            <Item
              key={producto.id}
              clave={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.pictureURL}
              altImg={producto.alt}
            />
          ))
        : "Cargando..."}
    </Container>
  );
};

export default ItemList;
/*{idCategoria
        ? productosFiltrados.map((producto) => (
            <Item
              key={producto.id}
              clave={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.pictureURL}
              altImg={producto.alt}
            />
          ))
        : productosCargados ?
          productosCargados.map((producto) => (
            <Item
              key={producto.id}
              clave={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.pictureURL}
              altImg={producto.alt}
            />
          ))}*/
