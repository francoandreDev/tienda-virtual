import { useEffect, useState } from "preact/hooks";
import { Item } from "./Item";
import { IProduct } from "../../data/exports";

import "./cart.css";

export function Cart() {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        setCartItems(cart);
    }, []);

    const handlePay = () => {
        sessionStorage.removeItem("cart");
        setCartItems([]);
        alert("Carrito vaciado. Gracias por su compra!");
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.stock,
            0
        );
    };

    if (cartItems.length === 0) {
        return (
            <div className="carrito">
                <h3>
                    <i class="fa-solid fa-ban"></i>No hay productos en el
                    carrito
                </h3>
            </div>
        );
    }

    return (
        <div className="carrito">
            <h3>Tus Productos</h3>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ))}
            </ul>
            <span className="inline">
                <div className="cart-total">
                    <h4>S/. {calculateTotal()}</h4>
                </div>
                <button
                    className="button rounded pay-button"
                    onClick={handlePay}
                >
                    <i class="fa-regular fa-credit-card"></i> Pagar
                </button>
            </span>
        </div>
    );
}
