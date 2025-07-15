// //as soon as we want to add more themes, state variables start piling up!
// //we can use reducer to condense all our state variables into one with different cases
// "use client";
// import { createContext, useContext } from "react";
// import { useReducer } from "react";

// //declare our reducer function --> in this function we will declare the different options (values) our state will contain
// //the action and state parameters represent objects!
// //in action, we are going to have a type property --> the type of action we want to use
// //in state, we will have a property for our themes --> this is all our state condensed

// //make sure your parameters are in this same order: state, action
// //your state needs to be there first, so the action can trigger its type

// function themeReducer(state, action) {

//   switch (action.type) {
//     case "light":
//       return { ...state, theme: (state.theme = "light") };

//     case "dark":
//       return { ...state, theme: (state.theme = "dark") };

//     case "colourblind":
//       return { ...state, theme: (state.theme = "colourblind") };

//     case "dyslexia":
//       return { ...state, theme: (state.theme = "dyslexia") };

//   }
// }

// const ThemeContext = createContext("light");

// export function ThemeProvider({ children }) {
//   //declare our reducer hook
//   //dispatch is in charge of triggering the different action types
//   //state contains the values of state
//   //useReducer takes two arguments --> first, the reducer function; second, the initial value of your state (state is an object!)
//   const [state, dispatch] = useReducer(themeReducer, { theme: "" });

//   return (
//     <ThemeContext.Provider
//       value={{
//         state,
//         dispatch,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }


"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

// Reducer: handles changing the theme
function themeReducer(state, action) {
  switch (action.type) {
    case "light":
    case "dark":
    case "dyslexia":
    case "colourblind":
      return { ...state, theme: action.type };
    default:
      return state;
  }
}

const ThemeContext = createContext();

// Provider wraps your whole app
export function ThemeProvider({ children }) {
  // Load theme from localStorage or use "light"
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  };

  const [state, dispatch] = useReducer(themeReducer, {
    theme: getInitialTheme(),
  });

  // Save theme to localStorage and update <body> when theme changes
  useEffect(() => {
    localStorage.setItem("theme", state.theme);

    document.body.classList.remove("light", "dark", "dyslexia", "colourblind");
    document.body.classList.add(state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme in any component
export function useTheme() {
  return useContext(ThemeContext);
}
