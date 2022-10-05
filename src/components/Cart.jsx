import styled from "@emotion/styled";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createOrder } from "../App/api";
import { useCartContext } from "../App/CartContext";
import CartItemDetail from "./CartItemDetail";
const Cart = () => {
  const { deleteCarrito, carritoArray, totalPrice, totalCantidad } =
    useCartContext();

  const ordenCompra = {
    comprador: {
      nombre: "usuario",
      correo: "alguien@example.com",
      telefono: "123456789",
      direccion: "qwerty 123, Esq. ytrewq",
    },
    productos: carritoArray.map((item) => ({
      id: item.key,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
    precioFinal: totalPrice(),
  };

  const emitirOrden = () => {
    createOrder(ordenCompra);
  };
  console.log(ordenCompra);
  useEffect(() => {
    console.log(carritoArray);
  }, [carritoArray]);

  return (
    <Container>
      <ControlContainer>
        {carritoArray.length > 0 ? (
          <>
            <div>
              El total de productos en el carrito es de {totalPrice()} con{" "}
              {totalCantidad()} productos añadidos.
            </div>
            <button onClick={deleteCarrito}>Limpiar Todo el Carrito</button>
          </>
        ) : (
          <>
            Aun no hay productos!
            <StyledLink to="/productos/">Volver al Catálogo</StyledLink>
          </>
        )}
      </ControlContainer>
      <CartContainer>
        {carritoArray.length > 0 &&
          carritoArray.map((producto) => (
            <CartItemDetail
              key={producto.key}
              id={producto.key}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.imgURL}
              altImg={producto.alt}
              cantidad={producto.cantidad}
            />
          ))}
        <button onClick={emitirOrden}>Finalizar Compra</button>
      </CartContainer>
    </Container>
  );
};
const StyledLink = styled(Link)``;
const CartContainer = styled.div``;
const Container = styled.div``;
const ControlContainer = styled.div``;

export default Cart;
