import { useNavigate } from "react-router-dom";
import { useState } from "preact/hooks";

import "./backButton.css";

export function BackButton() {
    const navigate = useNavigate();
    const [idx, setIdx] = useState<number>(window.history.state.idx);

    function handleGoBack() {
        // ? the only one with no key is the first entry in the history
        if (window.history.state.key === undefined) return;
        setIdx((current) => {
            if (current > 0) navigate(-1);
            return window.history.state.idx;
        });
    }

    return (
        <button
            className={`button rounded ${idx > 0 ? "" : "blocker"}`}
            onClick={handleGoBack}
        >
            Volver
        </button>
    );
}
