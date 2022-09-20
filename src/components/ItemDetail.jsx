import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Price } from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, precio, imgURL, altImg, description, stock }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = () => {
    setGoToCart(true);
  };

  return (
    <Container>
      <SubContainer>
        <p>{nombre}</p>
        <ImgContainer>
          <ImgStyled src={imgURL} alt={altImg} />
        </ImgContainer>
        <p>{description}</p>
      </SubContainer>
      <SubContainer>
        <Price>${precio}</Price>
        {goToCart ? (
          <Link to="/cart"> Ir al Carrito</Link>
        ) : (
          <ItemCount stock={stock} onAdd={onAdd} />
        )}
      </SubContainer>
    </Container>
  );
};

const SubContainer = styled.div`
  width: 50%;
  min-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 70%;
  border-radius: 25px;
  border: solid 1px gray;
  padding: 10px;
`;
const ImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-position: center center;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 550px;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 10px;
  flex-wrap: wrap;
  p {
    margin: 0;
  }
`;
export default ItemDetail;
