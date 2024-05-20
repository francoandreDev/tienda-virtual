import { createBrowserRouter } from "react-router-dom";
import {
    ArrivalsPage,
    CartPage,
    ProductDetailPage,
    ProductPage,
    ErrorPage,
    ContactPage,
    BestSellerPage,
} from "../pages/exports.ts";

export const router = createBrowserRouter([
    {
        path: "/nuevos-productos",
        element: <ArrivalsPage />,
    },
    {
        path: "/mas-vendidos",
        element: <BestSellerPage />,
    },
    {
        path: "/",
        element: <ProductPage />,
    },
    {
        path: "/productos/:id",
        element: <ProductDetailPage />,
    },
    {
        path: "/carrito",
        element: <CartPage />,
    },
    {
        path: "/contacto",
        element: <ContactPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);
