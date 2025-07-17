"use client";

import { useTheme } from "@/context/ThemeContext"; // custom hook

export default function ThemeButton({ styles }) {
  const { state, dispatch } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "light" })}
      >
        Light Mode
      </button>

      <button
        className={styles.button}
        onClick={() => dispatch({ type: "dark" })}
      >
        Dark Mode
      </button>

      <button
        className={styles.button}
        onClick={() => dispatch({ type: "dyslexia" })}
      >
        Dyslexia Font
      </button>
    </div>
  );
}
