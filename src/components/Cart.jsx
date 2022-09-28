import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useCartContext } from "../App/CartContext";
import CartItemDetail from "./CartItemDetail";
const Cart = () => {
  const { deleteCarrito, carritoArray, totalPrice, totalCantidad } =
    useCartContext();
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
              key={producto.id}
              clave={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              stock={producto.stock}
              imgURL={producto.pictureURL}
              altImg={producto.alt}
              cantidad={producto.cantidad}
            />
          ))}
      </CartContainer>
    </Container>
  );
};
const StyledLink = styled(Link)``;
const CartContainer = styled.div``;
const Container = styled.div``;
const ControlContainer = styled.div``;
export default Cart;
