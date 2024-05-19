import { Link } from "react-router-dom";
import { MissionVision } from "../exports";

import "./footer.css";

export function Footer() {
    return (
        <footer className="footer bottom-footer">
            <div className="footer-container">
                <div className="footer-top">
                    <MissionVision />
                </div>
                <div className="footer-middle">
                    <div className="footer-section">
                        <h4>
                            <i class="fa-solid fa-user-group"></i>Acerca de
                            nosotros
                        </h4>
                        <p>
                            Somos líderes en la venta de labiales de alta
                            calidad que realzan tu belleza. Nuestros productos
                            están formulados con ingredientes de primera clase
                            para un color duradero y un cuidado excepcional.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>
                            <i class="fa-solid fa-headset"></i>Servicio al
                            Cliente
                        </h4>
                        <ul>
                            <li className="link">
                                <Link to="/contacto">
                                    <i class="fa-regular fa-envelope"></i>
                                    Contáctenos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>
                            <i class="fa-solid fa-plus"></i>Síguenos
                        </h4>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank">
                                <i class="fa-brands fa-facebook-f"></i>
                                Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <i class="fa-brands fa-twitter"></i>
                                Twitter
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                                Instagram
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <i class="fa-brands fa-linkedin-in"></i>
                                LinkedIn
                            </a>
                        </div>
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
