import React, { useState } from "react";
import { createItem } from "../App/api";

const Home = () => {
  const [publicarProducto, setPublicarProducto] = useState({});
  console.log(publicarProducto);

  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            nombre: e.target.value,
          })
        }
        placeholder="nombre"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            descripcion: e.target.value,
          })
        }
        placeholder="descripcion"
      />
      <input
        type="number"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            key: e.target.value,
          })
        }
        placeholder="key"
      />
      <input
        type="number"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            precio: e.target.value,
          })
        }
        placeholder="precio"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            moneda: e.target.value,
          })
        }
        placeholder="moneda"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            alt: e.target.value,
          })
        }
        placeholder="alt"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            imgURL: e.target.value,
          })
        }
        placeholder="imgUrl"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            stock: e.target.value,
          })
        }
        placeholder="stock"
      />
      <input
        type="text"
        onChange={(e) =>
          setPublicarProducto({
            ...publicarProducto,
            categoria: e.target.value,
          })
        }
        placeholder="categoria"
      />
      <button type="submit" onClick={() => createItem(publicarProducto)}>
        Publicar Item
      </button>
    </>
  );
};

export default Home;
