import styled from "@emotion/styled";
import React from "react";

const ItemDetail = ({ nombre, precio, imgURL, altImg, description }) => {
  return (
    <Container>
      <div>
        <ImgStyled src={imgURL} alt={altImg} />
      </div>
      <p>{nombre}</p>
      <p>{description}</p>
      <p>${precio}</p>
    </Container>
  );
};

const ImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-position: center center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: solid 1px gray;
  padding: 10px;
  p {
    margin: 0;
  }
`;
export default ItemDetail;
