import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const CategoryItemSelector = () => {
  return (
    <SubNavContainer>
      <StyledLink to="/productos/Electrodomestico">
        Electrodomesticos
      </StyledLink>

      <StyledLink to="/productos/Mueble">Muebles</StyledLink>

      <StyledLink to="/productos/Calefaccion">Calefaccion</StyledLink>

      <StyledLink to="/productos/Vehiculo">Vehiculos</StyledLink>
    </SubNavContainer>
  );
};

const SubNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #333;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px 10px;
  border-radius: 15px 15px 0 0;
  :hover {
    background-color: #777;
  }
`;
export default CategoryItemSelector;
