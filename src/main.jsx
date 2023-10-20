import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToggleNavContext from "./contexts/ToggleNavContext.jsx";
import ThemeContext from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <ToggleNavContext>
      <App />
    </ToggleNavContext>
  </ThemeContext>
);
