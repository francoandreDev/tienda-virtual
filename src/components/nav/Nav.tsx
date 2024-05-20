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
            <h1 className="brand-title">
                <a href="/">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>Labiales
                    Bonita
                </a>
            </h1>
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
                        <Link to="/mas-vendidos">
                            <i class="fa-solid fa-fire"></i>
                            <span className="text-link">Más vendidos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nuevos-productos">
                            <i class="fa-solid fa-bullhorn"></i>
                            <span className="text-link">Nuevos Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span className="text-link">Catálogo</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/carrito">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className="text-link">Carrito</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
