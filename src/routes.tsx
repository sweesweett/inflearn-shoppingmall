import React from "react";
import { Outlet } from "react-router-dom";

const DynamicIndex = React.lazy(() => import("./pages/index"));
const DynamicCartIndex = React.lazy(() => import("./pages/cart/index"));
const DynamicProductsIndex = React.lazy(() => import("./pages/products/index"));
const DynamicProductsId = React.lazy(() => import("./pages/products/[id]"));

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <DynamicIndex />, index: true },
      { path: "/cart", element: <DynamicCartIndex />, index: true },
      { path: "/products", element: <DynamicProductsIndex />, index: true },
      { path: "/products/:id", element: <DynamicProductsId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/products" },
  { route: "/products/:id" },
];
