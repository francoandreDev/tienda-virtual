import { useNavigate } from "react-router-dom";

import "./backButton.css";

export function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className="button rounded" onClick={handleGoBack}>
            Volver
        </button>
    );
}
