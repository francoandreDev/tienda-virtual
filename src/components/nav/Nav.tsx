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
                <a href="/">Labiales Bonita</a>
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
                        <Link to="/">Más vendidos</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
