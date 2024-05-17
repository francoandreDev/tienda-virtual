import { BackButton } from "../../components/exports";
import "./error.css";

export function ErrorPage() {
    return (
        <div id="page error-page">
            <div className="back-button">
                <BackButton />
            </div>
            <h1>Página no válida</h1>
        </div>
    );
}
