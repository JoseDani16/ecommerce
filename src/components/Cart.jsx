import styled from "@emotion/styled";
import { useCartContext } from "../App/CartContext";
import CartItemDetail from "./CartItemDetail";
const Cart = () => {
  const { deleteCarrito, carritoArray, totalPrice, totalCantidad } =
    useCartContext();
  return (
    <Container>
      <ControlContainer>
        <div>
          El total de productos en el carrito es de {totalPrice()} con{" "}
          {totalCantidad()} productos añadidos.
        </div>
        <button onClick={deleteCarrito}>Limpiar Todo el Carrito</button>
      </ControlContainer>
      <CartContainer>
        {carritoArray
          ? carritoArray.map((producto) => (
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
            ))
          : "Aun no hay productos!"}
      </CartContainer>
    </Container>
  );
};
const CartContainer = styled.div``;
const Container = styled.div``;
const ControlContainer = styled.div``;
export default Cart;
