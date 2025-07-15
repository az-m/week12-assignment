// //we will have a button per theme. Each button will have a dispatch function that triggers the type of theme (action)  the user is selecting

// //when dispatch triggers the action, the reducer function will find a match between the type and the case that matches it

// //our case will update the value of state to the type of theme that was actioned

// //!context only works in client components
// "use client";

// import { useTheme } from "@/context/ThemeContext"; //custom hook
// import { Toggle } from "@/components/Toggle";

// export default function ThemeButton() {
//   const { state, dispatch } = useTheme();

//   return (
//     <div className="flex justify-between">
//       <Toggle
//         aria-label="Toggle Light Mode"
//         className={state.theme}
//         onClick={() => {
//           dispatch({ type: "light" });
//         }}
//       >
//         Light Mode
//       </Toggle>
//       <Toggle
//         aria-label="Toggle Dark Mode"
//         className={state.theme}
//         onClick={() => {
//           dispatch({ type: "dark" });
//         }}
//       >
//         Dark Mode
//       </Toggle>
//       <Toggle
//         aria-label="Toggle Dyslexia Font"
//         className={state.theme}
//         onClick={() => {
//           dispatch({ type: "dyslexia" });
//         }}
//       >
//         Dyslexia Font
//       </Toggle>
//     </div>
//   );
// }





"use client";

import { useTheme } from "@/context/ThemeContext"; // custom hook
import { Toggle } from "@/components/Toggle";

export default function ThemeButton() {
  const { state, dispatch } = useTheme();

  return (
    <div className="flex gap-2">
      <Toggle
        aria-label="Toggle Light Mode"
        pressed={state.theme === "light"}
        onClick={() => dispatch({ type: "light" })}
      >
        Light Mode
      </Toggle>

      <Toggle
        aria-label="Toggle Dark Mode"
        pressed={state.theme === "dark"}
        onClick={() => dispatch({ type: "dark" })}
      >
        Dark Mode
      </Toggle>

      <Toggle
        aria-label="Toggle Dyslexia Font"
        pressed={state.theme === "dyslexia"}
        onClick={() => dispatch({ type: "dyslexia" })}
      >
        Dyslexia Font
      </Toggle>
    </div>
  );
}
