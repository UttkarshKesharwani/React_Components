import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/BreadCrums/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
reportWebVitals();
