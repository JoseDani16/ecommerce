import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const Item = ({ nombre, precio, stock, imgURL, altImg, clave }) => {
  return (
    <Container>
      <Link to={`/detalleDelProducto/${clave}`}>
        <ImgContainer>
          <img src={imgURL} alt={altImg} />
        </ImgContainer>
        <Text>{nombre}</Text>
        <Text>${precio}</Text>
        <ItemCount stock={stock} />
      </Link>
    </Container>
  );
};

const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center center;
  }
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 70px;
  height: 250px;
  border-radius: 15px;
  border: solid 1px #e6e6e6;
  margin: 5px 10px;
  transition: all 0.2s;
  :hover {
    background-color: #e6e6e6;
  }
`;

export default Item;
