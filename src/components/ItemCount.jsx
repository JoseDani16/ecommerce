import React, { useState } from "react";
import styled from "@emotion/styled";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decline = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <CounterItem id="container">
      <div className="flexStyle">
        <button id="boton2" onClick={decline}>
          -
        </button>
        <div id="numero" className="numero">
          {count}
        </div>
        <button id="boton1" onClick={increase}>
          +
        </button>
      </div>
      <CartBotonContainer>
        <button
          disabled={count === 0}
          id="CartBoton"
          onClick={() => onAdd(count)}
        >
          Añadir al Carrito
        </button>
      </CartBotonContainer>
      <StockContainer>
        El stock de este producto es de: {stock} unidades
      </StockContainer>
    </CounterItem>
  );
};

const CartBotonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  animation-name: aparicion;
  animation-duration: 0.4s;

  @keyframes aparicion {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StockContainer = styled.div`
  text-align: center;
  color: #999;
`;
const CounterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;

  * {
    box-sizing: border-box;
  }

  /* Contenedor principal de la aplicación */

  /* Hace que los botones esten lado a lado */

  .flexStyle {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #numero {
    font-size: 1em;
    margin: 0 5px;
    text-align: center;
    user-select: none;
    font-weight: bold;
  }

  /* Estilos de los botones */
  #boton1,
  #boton2 {
    font-size: x-large;
  }

  #boton1,
  #boton2,
  #CartBoton {
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.4s;
    color: #999;
    background: #e0e0e0;
    width: 100px;
    height: 30px;
    margin: 5px;
  }

  #boton1:hover {
    background: #2ab7ca;
    color: #fff;
  }

  #boton2:hover {
    background: #fe4a49;
    color: #000;
  }
  #CartBoton:hover {
    background: green;
    color: #fff;
  }
`;
export default ItemCount;
