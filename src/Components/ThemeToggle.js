import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div>
      <button onClick={toggleTheme} className={`${theme}-theme`}>
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
