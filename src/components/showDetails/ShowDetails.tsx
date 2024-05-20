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
        if (product)
            if (quantity > product.stock) {
                alert("No hay suficiente stock");
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
            <div className="relative image-wrapper">
                <img
                    src={"/productos/" + product.img}
                    alt={product.name}
                    className="image"
                />
                <span className="flex icons absolute">
                    {product.isBestSeller && <i class="fa-solid fa-fire"></i>}
                    {product.isNewArrival && (
                        <i class="fa-solid fa-bell-concierge"></i>
                    )}
                </span>
            </div>
            <div className="content">
                <h3 className="title text-left">{product.name}</h3>
                <p className="description text-left">{product.description}</p>
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
                        autoFocus
                    />
                    /{product.stock}
                </span>
                <div className="flex-space">
                    <button
                        className="button inline rounded add-cart"
                        onClick={handleAddToCart}
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        <p>Añadir al carrito</p>
                    </button>
                    <p className="price">S/. {product.price * quantity}</p>
                </div>
            </div>
        </div>
    );
}
