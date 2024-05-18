import { useEffect, useState } from "preact/hooks";

import "./cart.css";

export type Producto = {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    img: string;
    cantidad: number;
};

export function Carrito() {
    const [cartItems, setCartItems] = useState<Producto[]>([]);

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
            (total, item) => total + item.price * item.cantidad,
            0
        );
    };

    if (cartItems.length === 0) {
        return (
            <div className="carrito">
                <h3>No hay elementos en el carrito</h3>
            </div>
        );
    }

    return (
        <div className="carrito">
            <h3>Tus Productos</h3>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img
                            src={"/productos/" + item.img}
                            alt={item.name}
                            className="cart-item-img"
                        />
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>Precio: S/. {item.price}</p>
                            <p>Cantidad: {item.cantidad}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h4>Total: S/. {calculateTotal()}</h4>
            </div>
            <button className="button rounded pay-button" onClick={handlePay}>
                Pagar
            </button>
        </div>
    );
}
