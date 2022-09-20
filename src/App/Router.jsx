import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContent from "../components/CartContent";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Home from "../Pages/Home";
import Productos from "../Pages/Productos";
import Layout from "./Layout";
import LayoutProduct from "./LayoutProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<LayoutProduct />}>
            <Route path="/productos/" element={<Productos />} />
            <Route
              path="/detalleDelProducto/:idDelProducto"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/productos/:idCategoria"
              element={<ItemListContainer />}
            />
          </Route>
          <Route path="/cart" element={<CartContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
