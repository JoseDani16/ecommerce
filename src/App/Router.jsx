import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Home from "../Pages/Home";
import Productos from "../Pages/Productos";
import CartProvider from "./CartContext";
import Layout from "./Layout";
import LayoutProduct from "./LayoutProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<LayoutProduct />}>
              <Route path="/productos/" element={<Productos />} />
              <Route
                path="/detalleDelProducto/:keyDelProducto"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/productos/:nameCategoria"
                element={<ItemListContainer />}
              />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;
