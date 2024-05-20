import { useState } from "preact/hooks";
import {
    BackButton,
    Banner,
    Filters,
    Footer,
    ListProducts,
    Nav,
    SearchBar,
} from "../../components/exports";
import { IProduct, products, filterProducts } from "../../data/exports";

import "./product.css";

export function ProductPage() {
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
                <div className="page products">
                    <div className="back-button">
                        <BackButton />
                    </div>
                    <Banner />
                    <h2 className="title align-center">Catálogo</h2>
                    <span className="flex-center">
                        <SearchBar
                            onSearch={handleSearch}
                            products={products}
                        />
                    </span>
                    <span className="flex-center">
                        <Filters
                            onFilterChange={(criteria) =>
                                setShowProducts(
                                    filterProducts(products, criteria)
                                )
                            }
                        />
                    </span>
                    <ListProducts products={showProducts} />
                </div>
            </main>
            <Footer />
        </>
    );
}
