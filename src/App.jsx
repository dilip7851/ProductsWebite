import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Componet/Layout";
import Home from "./Componet/Home";
import About from "./Componet/About";
import Shop from "./Componet/Shop";
import ProductsDetails from "./Pages/ProductsDetails";
import MainContext from "./Context/MainContext";
import CartDetails from "./Pages/CartDetails";
import Login from "./LoginOut/Login";
import Register from "./LoginOut/Register";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:slug?" element={<Shop />} />
        <Route
          path="/products-Details/:Products_id"
          element={<ProductsDetails />}
        />
        <Route path="/Cart-Details" element={<CartDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );

  return (
    <MainContext>
      <RouterProvider router={routers} />
    </MainContext>
  );
}

export default App;
