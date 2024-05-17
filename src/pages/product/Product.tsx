import { Footer, Nav } from "../../components/exports";

import "./product.css";

export function ProductPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page cart">
                    <h2 className="title align-center">Productos</h2>
                </div>
            </main>
            <Footer />
        </>
    );
}
