//we will have a button per theme. Each button will have a dispatch function that triggers the type of theme (action)  the user is selecting

//when dispatch triggers the action, the reducer function will find a match between the type and the case that matches it

//our case will update the value of state to the type of theme that was actioned

//!context only works in client components
"use client";

import { useTheme } from "@/context/ThemeContext"; //custom hook

export default function ThemeButton() {

  const { state, dispatch } = useTheme();

  return (
    <div className="flex justify-between">
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        lightMode
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        darkMode
      </button>
      {/* <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "colourblind" });
        }}
      >
        colorblindMode
      </button> */}
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dyslexia" });
        }}
      >
        dyslexiaMode
      </button>
    </div>
  );
}