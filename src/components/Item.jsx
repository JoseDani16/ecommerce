import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, moneda, imgURL, altImg, clave, cantidad }) => {
  return (
    <Container>
      <StyledLink to={`/detalleDelProducto/${clave}`}>
        <ImgContainer>
          <img src={imgURL} alt={altImg} />
        </ImgContainer>
        <Text>{nombre}</Text>
        <Price>
          {moneda} {precio}
        </Price>
        {cantidad && cantidad}
      </StyledLink>
    </Container>
  );
};

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: black;
`;
const ImgContainer = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  background-color: #e6e6e6;
  img {
    object-fit: cover;
    width: 80%;
    height: 80%;
    object-position: center center;
  }
`;
const Text = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
export const Price = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.4rem;
  font-weight: bolder;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 250px;
  height: 16rem;
  border-radius: 15px;
  border: solid 1px #e6e6e6;
  padding: 0;
  margin: 5px 10px;
  transition: all 0.2s;
  :hover {
    background-color: #e6e6e6;
  }
`;

export default Item;
