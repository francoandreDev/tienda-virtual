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
                <a href="/">Labiales Hermosos</a>
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
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/productos">Productos</a>
                    </li>
                    <li>
                        <a href="/carrito">Carrito</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
