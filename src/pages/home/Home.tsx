import { BackButton, Banner, Footer, Nav } from "../../components/exports";

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
                    <h2 className="title align-center">Más Vendidos</h2>
                    <Banner />
                </div>
            </main>
            <Footer />
        </>
    );
}
