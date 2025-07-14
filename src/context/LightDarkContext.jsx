import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //declare our state
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//we need a custom hook, so we can access the values stored in context using the useContext() hook
//we are making our code efficient by having this custom hook; otherwise, we would have had to import useContext and use it in every single component that needs these context values
export function useTheme() {
  return useContext(ThemeContext);
}
