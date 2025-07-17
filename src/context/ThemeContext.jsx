

"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

function themeReducer(state, action) {
  switch (action.type) {
    case "light":
    case "dark":
    case "dyslexia":
      return { ...state, theme: action.type };
    default:
      return state;
  }
}

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") 
    }
    return " ";
  };

  const [state, dispatch] = useReducer(themeReducer, {
    theme: getInitialTheme(),
  });

  useEffect(() => {
    // Remove all themes first
    document.body.classList.remove("light", "dark", "dyslexia");

    // Add the current one
    document.body.classList.add(state.theme);

    // Save it
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
