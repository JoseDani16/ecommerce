import React, { useState } from "react";
import styled from "@emotion/styled";
import BurguerButton from "../BurguerButton";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <NavLink to="">
          <h2>
            Navbar <span>Responsive</span>
          </h2>
        </NavLink>

        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="">Inicio</Link>
          <Link to="/productos/">Productos</Link>
        </div>
        <div className="carWidget">
          <CartWidget />
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv
          className={`initial ${clicked ? " active" : ""}`}
          onClick={handleClick}
        ></BgDiv>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
    z-index: 1;
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default Navbar;
