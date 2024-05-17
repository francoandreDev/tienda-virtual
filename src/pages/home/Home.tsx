import { Footer, Nav } from "../../components/exports";

import "./home.css";

export function HomePage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page cart">
                    <h2 className="title align-center">Inicio</h2>
                </div>
            </main>
            <Footer />
        </>
    );
}
