import { useParams } from "react-router-dom";
import { useState } from "preact/hooks";
import { products } from "../../data/exports";

import "./showDetails.css";

export function ShowDetails() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState<number>(1);

    const productId = id ? parseInt(id, 10) : null;

    const product =
        productId !== null
            ? products.find((p) => p.id === productId)
            : undefined;

    function handleAddToCart() {
        if (quantity <= 0) {
            alert("La cantidad debe ser positiva y mayor que cero");
            return;
        }

        const currentCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const productIndex = currentCart.findIndex(
            (item: any) => item.id === product?.id
        );

        if (productIndex !== -1) {
            currentCart[productIndex].stock += quantity;
        } else {
            currentCart.push({ ...product, stock: quantity });
        }

        sessionStorage.setItem("cart", JSON.stringify(currentCart));
        alert(`${quantity} ${product?.name}(s) añadido(s) al carrito!`);
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
                <p className="price">S/. {product.price * quantity}</p>
                <span className="stock">
                    <input
                        type="number"
                        aria-label={"stock-" + product.id + "input"}
                        className={"quantity"}
                        onChange={(e) =>
                            setQuantity(Number(e.currentTarget.value))
                        }
                        value={quantity}
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
