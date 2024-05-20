import { useNavigate } from "react-router-dom";
import { IProduct } from "../../data/exports";

import "./listProducts.css";

export function ListProducts({ products }: { products: IProduct[] }) {
    const navigate = useNavigate();

    function handleButtonClick(id: number) {
        navigate("/productos/" + id);
    }

    return (
        <div className="list-products">
            {products.map((p) => (
                <div className={"card"} key={p.id}>
                    <div className="layout-card">
                        <div className="wrapper-image-price">
                            <p className="price tag align-center">
                                S/. {p.price}
                            </p>
                            <img
                                src={"/productos/" + p.img}
                                alt={p.name}
                                className="image"
                            />
                        </div>
                        <h3 className="subtitle align-center">{p.name}</h3>
                        <button
                            className="button rounded add-cart"
                            onClick={() => handleButtonClick(p.id)}
                        >
                            Ver Detalles
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
