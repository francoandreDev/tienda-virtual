import { IProduct } from "../../data/exports";

export function Item({
    item,
    cartItems,
    setCartItems,
}: {
    item: IProduct;
    cartItems: IProduct[];
    setCartItems: (items: IProduct[]) => void;
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
            item.id === id ? { ...item, stock: newQuantity } : item
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
                <p>Subtotal: S/. {item.price * item.stock}</p>
                <div className="cart-item-quantity">
                    <p>Cantidad:</p>
                    <input
                        type="number"
                        value={item.stock}
                        min="0"
                        onChange={(e) => {
                            e.currentTarget.value =
                                e.currentTarget.value.replace(".", "");
                            handleQuantityChange(e);
                        }}
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
