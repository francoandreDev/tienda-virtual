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

import "./bestSeller.css";

export function BestSellerPage() {
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
                    <h2 className="title align-center">Más Vendidos</h2>
                    <span className="flex-center">
                        <SearchBar
                            onSearch={handleSearch}
                            products={filterProducts(products, {
                                isBestSeller: true,
                            })}
                        />
                    </span>
                    <ListProducts
                        products={filterProducts(showProducts, {
                            isBestSeller: true,
                        })}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
