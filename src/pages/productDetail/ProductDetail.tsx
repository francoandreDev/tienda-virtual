import { Footer, Nav } from "../../components/exports";
import "./productDetail.css";

export function ProductDetailPage() {
    return (
        <>
            <header className="top-header">
                <Nav />
            </header>
            <main>
                <div className="page cart">
                    <h2 className="title align-center">
                        Detalles del Producto
                    </h2>
                </div>
            </main>
            <Footer />
        </>
    );
}
