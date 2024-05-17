import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router";
import { Loader } from "../exports";

import "./app.css";

export function App() {
    return (
        <div className="app">
            <RouterProvider
                router={router}
                fallbackElement={<Loader />}
                future={{ v7_startTransition: true }}
            />
        </div>
    );
}
