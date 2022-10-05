import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../App/api";
import Item from "./Item";

const ItemList = () => {
  const [productosCargados, setProductosCargados] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState(null);
  let productosAPintar = [];

  const { nameCategoria } = useParams();

  useEffect(() => {
    setProductosFiltrados(null);
    getItems().then((res) => {
      setProductosCargados(res);
      setProductosFiltrados(
        res.filter((producto) => producto.categoria === nameCategoria)
      );
    });
  }, [nameCategoria]);

  if (nameCategoria !== undefined) {
    productosAPintar = productosFiltrados;
  } else {
    productosAPintar = productosCargados;
  }

  return (
    <Container>
      {productosAPintar
        ? productosAPintar.map((producto) => (
            <Item
              key={producto.key}
              clave={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.imgURL}
              altImg={producto.alt}
              moneda={producto.moneda}
            />
          ))
        : "Cargando..."}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export default ItemList;
/*{nameCategoria
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
