import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [carritoArray, setCarritoArray] = useState([]);

  const AddToCart = (newProdu, nuevaCantidad) => {
    const newCart = carritoArray.filter(
      (oldProdu) => oldProdu.id !== newProdu.id
    );
    newCart.push({ ...newProdu, cantidad: nuevaCantidad });
    setCarritoArray(newCart);
  };

  const deleteCarrito = () => {
    setCarritoArray([]);
  };

  const deleteProdu = (id) => {
    setCarritoArray(carritoArray.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return carritoArray.find((item) => item.id === id) ? true : false;
  };
  console.log(carritoArray);

  return (
    <CartContext.Provider
      value={{ AddToCart, deleteCarrito, deleteProdu, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
