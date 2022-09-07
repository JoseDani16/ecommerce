import React, { useState } from "react";
import styled from "@emotion/styled";

const ItemCount = ({ stock }) => {
  const [valor, setValor] = useState(0);

  const increase = () => {
    if (valor < stock) {
      setValor(valor + 1);
    }
  };
  const decline = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };
  return (
    <CounterItem id="container">
      <div id="numero" className="numero">
        {valor}
      </div>
      <div className="flexStyle">
        <button id="boton2" onClick={decline}>
          -
        </button>
        <button id="boton1" onClick={increase}>
          +
        </button>
      </div>
      <StockContainer>El stock de este producto es de: {stock}</StockContainer>
    </CounterItem>
  );
};

const StockContainer = styled.div``;
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
  }

  #numero {
    font-size: 3em;
    text-align: center;
    margin-bottom: 20px;
    user-select: none;
    font-weight: bold;
  }

  /* Estilos de los botones */

  #boton1,
  #boton2 {
    padding: 20px;
    margin: 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.4s;
    color: #999;
    background: #e0e0e0;
    width: 50%;
    font-size: x-large;
  }

  #boton1:hover {
    background: #2ab7ca;
    color: #fff;
  }

  #boton2:hover {
    background: #fe4a49;
    color: #000;
  }
`;

export default ItemCount;
