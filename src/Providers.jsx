//here we can compile all our context providers for convenience
//we will use this component function in our layout

//context is only available in the client!
"use client";

import React from "react";
import { ThemeProvider } from "./context/ThemeContext"; // adjust path if needed

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
