import React from "react";
import { BsCart3 } from "react-icons/bs";
import styled from "@emotion/styled";

const CartIcon = styled(BsCart3)`
  color: green;
  margin-right: 1rem;
  font-size: x-large;
`;

const CartWidget = () => {
  return <CartIcon />;
};

export default CartWidget;
