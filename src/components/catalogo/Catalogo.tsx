import { useNavigate } from "react-router-dom";

import "./catalogo.css";

export type Producto = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    img: string;
};

type ProductosProps = {
    productos: Producto[];
};

export function Catalogo({ productos }: ProductosProps) {
    const navigate = useNavigate();

    function handleButtonClick(id: number) {
        navigate("/productos/" + id);
    }

    return (
        <div className="catalogo">
            {productos.map((p) => (
                <div className={"card"} key={p.id}>
                    <div className="layout-card">
                        <img
                            src={"/productos/" + p.img}
                            alt={p.name}
                            className="image"
                        />
                        <h3 className="subtitle align-center">{p.name}</h3>
                        <span className="flex-space">
                            <p className="price align-center">S/. {p.price}</p>
                        </span>
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
