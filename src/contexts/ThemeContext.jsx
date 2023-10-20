import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Theme = createContext();

const ThemeContext = ({ children }) => {
  //
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  //
  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
};

export default ThemeContext;
