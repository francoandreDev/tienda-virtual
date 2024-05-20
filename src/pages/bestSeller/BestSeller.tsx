import {
    BackButton,
    Banner,
    Footer,
    ListProducts,
    Nav,
} from "../../components/exports";
import { filterProducts, products } from "../../data/products";

import "./bestSeller.css";

export function BestSellerPage() {
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
                    <ListProducts
                        products={filterProducts(products, {
                            isBestSeller: true,
                        })}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
