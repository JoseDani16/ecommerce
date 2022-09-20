import React from "react";
import { BsCart3 } from "react-icons/bs";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <StyledLink to={"/cart"}>
      <CartIcon />
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  width: min-content;
  height: min-content;
`;
const CartIcon = styled(BsCart3)`
  color: green;
  font-size: x-large;
`;
export default CartWidget;
