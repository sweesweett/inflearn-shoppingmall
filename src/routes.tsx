// import React from "react";
import { Outlet } from "react-router-dom";
import Cart from "./pages/cart";
import ProductList from "./pages/products/";
import ProductDetailPage from "./pages/products/[id]";
import MainPage from "./pages";

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <MainPage />, index: true },
      { path: "/cart", element: <Cart />, index: true },
      { path: "/products", element: <ProductList />, index: true },
      { path: "/products/:id", element: <ProductDetailPage /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/products" },
  { route: "/products/:id" },
];
