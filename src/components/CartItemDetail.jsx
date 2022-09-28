import styled from "@emotion/styled";
import React from "react";
import { useCartContext } from "../App/CartContext";

const CartItemDetail = ({
  nombre,
  precio,
  imgURL,
  altImg,
  cantidad,
  clave,
}) => {
  const { deleteProdu } = useCartContext();
  return (
    <Container>
      <SubContainer>
        <ImgContainer>
          <img src={imgURL} alt={altImg} />
        </ImgContainer>
        <Text>{nombre}</Text>
      </SubContainer>
      <SubContainer>
        <Price>$ {cantidad * precio}</Price>
        {cantidad && cantidad}
        <button onClick={() => deleteProdu(clave)}>X</button>
      </SubContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 90%;
  height: 150px;
  min-height: 150px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px #a0a0a0;
  border-radius: 15px;
  flex-wrap: wrap;
`;
const SubContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 50%;

  align-items: start;
`;
const ImgContainer = styled.div`
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 80%;
  background-color: #e6e6e6;
  img {
    object-fit: contain;
    width: 80%;
    height: 80%;
    object-position: center center;
  }
`;
const Text = styled.div`
  display: flex;
  width: 35%;
  justify-content: center;
`;

const Price = styled.div`
  display: flex;
`;
export default CartItemDetail;
