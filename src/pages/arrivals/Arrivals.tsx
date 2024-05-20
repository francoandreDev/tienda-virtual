import {
    BackButton,
    Banner,
    Footer,
    ListProducts,
    Nav,
} from "../../components/exports";
import { filterProducts, products } from "../../data/products";

import "./arrivals.css";

export function ArrivalsPage() {
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
                    <h2 className="title align-center">Nuevos Productos</h2>
                    <ListProducts
                        products={filterProducts(products, {
                            isNewArrival: true,
                        })}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
