import { useParams } from "react-router-dom";
import { useState } from "preact/hooks";
import { productos } from "../../data/productos/productos";

import "./showDetails.css";

export type Producto = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    img: string;
};

export function ShowDetails() {
    const { id } = useParams();
    const [cantidad, setCantidad] = useState<number>(1);

    // Verificar que id no sea undefined y convertirlo a número
    const productId = id ? parseInt(id, 10) : null;

    // Buscar el producto por id
    const product =
        productId !== null
            ? productos.find((p) => p.id === productId)
            : undefined;

    function handleAddToCart() {
        if (cantidad <= 0) {
            alert("La cantidad debe ser positiva y mayor que cero");
            return;
        }

        const currentCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const productIndex = currentCart.findIndex(
            (item: any) => item.id === product?.id
        );

        if (productIndex !== -1) {
            currentCart[productIndex].cantidad += cantidad;
        } else {
            currentCart.push({ ...product, cantidad });
        }

        sessionStorage.setItem("cart", JSON.stringify(currentCart));
        alert(`${cantidad} ${product?.name}(s) añadido(s) al carrito!`);
    }

    if (!product) {
        return (
            <div className="show-details">
                <h3 className="title">
                    <i class="fa-solid fa-ban"></i>El producto no existe
                </h3>
            </div>
        );
    }

    return (
        <div className="show-details">
            <h3 className="title">{product.name}</h3>
            <img
                src={"/productos/" + product.img}
                alt={product.name}
                className="image"
            />
            <p className="description">{product.description}</p>
            <span className="flex-space">
                <p className="price">S/. {product.price * cantidad}</p>
                <span className="stock">
                    <input
                        type="number"
                        aria-label={"stock-" + product.id + "input"}
                        className={"quantity"}
                        onChange={(e) =>
                            setCantidad(Number(e.currentTarget.value))
                        }
                        value={cantidad}
                        min="1"
                        max={product.stock}
                    />
                    /{product.stock}
                </span>
            </span>
            <button className="button rounded inline" onClick={handleAddToCart}>
                <i class="fa-solid fa-cart-plus"></i>
                <p>Añadir al carrito</p>
            </button>
        </div>
    );
}
