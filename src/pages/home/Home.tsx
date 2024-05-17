import { BackButton, Banner, Catalogo, Footer, Nav } from "../../components/exports";
import { productos } from "../../data/destacados/destacados";

import "./home.css";

export function HomePage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page home">
                    <div className="back-button">
                        <BackButton />
                    </div>
                    <Banner />
                    <h2 className="title align-center">Más Vendidos</h2>
                    <Catalogo productos={productos} />
                </div>
            </main>
            <Footer />
        </>
    );
}
