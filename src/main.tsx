import { render } from "preact";
import { App } from "./components/app/App";

import "./styles/normalize.css";
import "./styles/reset.css";
import "./styles/general.css";

render(<App />, document.getElementById("app")!);
