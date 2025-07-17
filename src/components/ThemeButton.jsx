//! THIS COMPONENT IS DEPRECATED

"use client";

import { useTheme } from "@/context/ThemeContext"; // custom hook

export default function ThemeButton() {
  const { state, dispatch } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        className={
          state.theme === "light"
            ? "bg-blue-500 text-white px-3 py-1 rounded"
            : "bg-gray-200 text-black px-3 py-1 rounded"
        }
        onClick={() => dispatch({ type: "light" })}
      >
        Light Mode
      </button>

      <button
        className={
          state.theme === "dark"
            ? "bg-blue-500 text-white px-3 py-1 rounded"
            : "bg-gray-200 text-black px-3 py-1 rounded"
        }
        onClick={() => dispatch({ type: "dark" })}
      >
        Dark Mode
      </button>

      <button
        className={
          state.theme === "dyslexia"
            ? "bg-blue-500 text-white px-3 py-1 rounded"
            : "bg-grey-200 text-yellow px-3 py-1 rounded"
        }
        onClick={() => dispatch({ type: "dyslexia" })}
      >
        Dyslexia Font
      </button>
    </div>
  );
}
