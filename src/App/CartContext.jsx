import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [carritoArray, setCarritoArray] = useState([]);

  //---------------------------------------------------
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

  const totalPrice = () => {
    return carritoArray.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.cantidad * valorActual.precio,
      0
    );
  };
  const totalCantidad = () => {
    return carritoArray.reduce(
      (acumulador, valorActual) => acumulador + valorActual.cantidad,
      0
    );
  };
  //------------------------------------------

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        deleteCarrito,
        deleteProdu,
        isInCart,
        carritoArray,
        totalCantidad,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
