import { BackButton, Catalogo, Footer, Nav } from "../../components/exports";
import { productos } from "../../data/productos/productos";

import "./product.css";

export function ProductPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page products">
                    <div className="back-button">
                        <BackButton />
                    </div>
                    <h2 className="title align-center">Productos</h2>
                    <Catalogo productos={productos} />
                </div>
            </main>
            <Footer />
        </>
    );
}
