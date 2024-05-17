import { Link } from "react-router-dom";

import "./footer.css";

export function Footer() {
    return (
        <footer className="footer bottom-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Acerca de nosotros</h4>
                    <p>
                        Somos una empresa líder en la venta de labiales,
                        ofreciendo una amplia gama de productos de alta calidad
                        que realzan tu belleza. Nuestros labiales están
                        formulados con ingredientes de primera clase para
                        proporcionar un color duradero y un cuidado excepcional
                        para tu belleza.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Servicio al Cliente</h4>
                    <ul>
                        <li>
                            <Link to="/contacto">Contáctenos</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
}
