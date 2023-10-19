import { useRef } from "react";
import { createContext } from "react";

export const NavContext = createContext();

const ToggleNavContext = ({ children }) => {
  const side_bar = useRef();
  const side_bar_overlay = useRef();

  const show_side_nav = () => {
    side_bar.current.classList.toggle("show_side_bar");
    side_bar_overlay.current.classList.toggle("show_side_bar_overlay");
  };
  const close_side_nav = () => {
    side_bar.current.classList.remove("show_side_bar");
    side_bar_overlay.current.classList.remove("show_side_bar_overlay");
  };
  return (
    <NavContext.Provider
      value={{ side_bar, side_bar_overlay, show_side_nav, close_side_nav }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default ToggleNavContext;
