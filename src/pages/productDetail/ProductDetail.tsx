import { BackButton, Footer, Nav, ShowDetails } from "../../components/exports";

import "./productDetail.css";

export function ProductDetailPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page product">
                    <div className="back-button">
                        <BackButton />
                    </div>
                    <h2 className="title align-center">
                        Detalles del Producto
                    </h2>
                    <ShowDetails />
                </div>
            </main>
            <Footer />
        </>
    );
}
