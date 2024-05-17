import "./footer.css";

export function Footer() {
    return (
        <footer className="footer bottom-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Acerca de nosotros</h4>
                    <p>
                        Somos una tienda líder en la venta de productos de
                        maquillaje, ofreciendo una amplia gama de cosméticos de
                        alta calidad y productos para el cuidado de la piel.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Servicio al Cliente</h4>
                    <ul>
                        <li>
                            <a href="/contacto">Contáctenos</a>
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
