import { useState } from "preact/hooks";
import {
    BackButton,
    Banner,
    Footer,
    ListProducts,
    Nav,
    SearchBar,
} from "../../components/exports";
import { filterProducts, products } from "../../data/products";
import { IProduct } from "../../data/typeProducts";

import "./arrivals.css";

export function ArrivalsPage() {
    const [showProducts, setShowProducts] = useState<IProduct[]>(products);

    function handleSearch(query: string) {
        setShowProducts(filterProducts(products, { name: query }));
    }
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
                    <span className="flex-center">
                        <SearchBar
                            onSearch={handleSearch}
                            products={filterProducts(showProducts, {
                                isNewArrival: true,
                            })}
                        />
                    </span>
                    <ListProducts
                        products={filterProducts(showProducts, {
                            isNewArrival: true,
                        })}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
