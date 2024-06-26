import { Nav, Footer, BackButton, Cart } from "../../components/exports";

import "./cart.css";

export function CartPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page cart">
                    <div className="back-button">
                        <BackButton />
                    </div>
                    <h2 className="title align-center">Carrito</h2>
                    <Cart />
                </div>
            </main>
            <Footer />
        </>
    );
}
