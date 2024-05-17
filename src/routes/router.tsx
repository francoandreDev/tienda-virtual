import { createBrowserRouter } from "react-router-dom";
import {
    HomePage,
    CartPage,
    ProductDetailPage,
    ProductPage,
    ErrorPage,
    ContactoPage,
} from "../pages/exports.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/productos",
        element: <ProductPage />,
    },
    {
        path: "/productos:id",
        element: <ProductDetailPage />,
    },
    {
        path: "/carrito",
        element: <CartPage />,
    },
    {
        path: "/contacto",
        element: <ContactoPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);
