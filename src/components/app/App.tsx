import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router.tsx";
import { Nav, Footer } from "../exports.ts";

import "./app.css";

export function App() {
    return (
        <div className="app">
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <RouterProvider router={router} />
            </main>
            <Footer />
        </div>
    );
}
