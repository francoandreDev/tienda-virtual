import { createBrowserRouter } from "react-router-dom";
import {
    HomePage,
    CartPage,
    ProductDetailPage,
    ProductPage,
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
        path: "/producto/:id",
        element: <ProductDetailPage />,
    },
    {
        path: "/carrito",
        element: <CartPage />,
    },
    {
        path: "/contacto",
        element: <>Contacto</>,
    },
]);
