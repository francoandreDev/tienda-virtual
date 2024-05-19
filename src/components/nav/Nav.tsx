import { Link } from "react-router-dom";
import { useState } from "preact/hooks";

import "./nav.css";

export function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((currentState) => !currentState);
    };

    return (
        <nav className="navbar">
            <div className="brand-title">
                <a href="/">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>Labiales
                    Bonita
                </a>
            </div>
            <div
                className={`toggle-button ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`navbar-links ${isOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link to="/">
                            <i class="fa-solid fa-fire"></i>Más vendidos
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos">
                            <i class="fa-solid fa-bag-shopping"></i>Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/carrito">
                            <i class="fa-solid fa-cart-shopping"></i>Carrito
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
