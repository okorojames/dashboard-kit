import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToggleNavContext from "./contexts/ToggleNavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToggleNavContext>
    <App />
  </ToggleNavContext>
);
