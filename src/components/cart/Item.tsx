import { Producto } from "./Cart";

export function Item({
    item,
    cartItems,
    setCartItems,
}: {
    item: Producto;
    cartItems: Producto[];
    setCartItems: (items: Producto[]) => void;
}) {
    const handleQuantityChange = (e: Event) => {
        const newQuantity = Number((e.target as HTMLInputElement).value);
        updateQuantity(item.id, newQuantity >= 0 ? newQuantity : 0);
    };

    const removeItem = (id: number) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const updateQuantity = (id: number, newQuantity: number) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, cantidad: newQuantity } : item
        );
        setCartItems(updatedCart);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <li className="cart-item">
            <img
                src={"/productos/" + item.img}
                alt={item.name}
                className="cart-item-img"
            />
            <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Precio Unitario: S/. {item.price}</p>
                <p>Subtotal: S/. {item.price * item.cantidad}</p>
                <div className="cart-item-quantity">
                    <p>Cantidad:</p>
                    <input
                        type="number"
                        value={item.cantidad}
                        min="0"
                        onChange={handleQuantityChange}
                    />
                </div>
                <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                >
                    <i class="fa-solid fa-trash-can"></i>
                    Eliminar
                </button>
            </div>
        </li>
    );
}
