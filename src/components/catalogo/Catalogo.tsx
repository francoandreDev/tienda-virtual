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
    return (
        <div className="catalogo">
            {productos.map((p) => (
                <div className={"card"} key={p.id}>
                    <div className="layout-card">
                        <img
                            src={"/src/assets/productos/" + p.img}
                            alt={p.name}
                            className="image"
                        />
                        <h3 className="subtitle align-center">{p.name}</h3>
                        <p className="description align-center">
                            {p.description}
                        </p>
                        <span className="flex-space">
                            <span className="flex">
                                <input
                                    placeholder="0"
                                    value="0"
                                    type="number"
                                    name={p.id + "cantidad"}
                                    id=""
                                    className={"quantity"}
                                />
                                <p className="stock align-center">/{p.stock}</p>
                            </span>
                            <p className="price">S/. {p.price}</p>
                        </span>
                        <button className="button rounded add-cart">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
