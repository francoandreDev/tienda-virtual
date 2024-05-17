import { Nav, Footer } from "../../components/exports";

import "./cart.css";

export function CartPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page cart">
                    <h2 className="title align-center">Carrito</h2>
                </div>
            </main>
            <Footer />
        </>
    );
}
