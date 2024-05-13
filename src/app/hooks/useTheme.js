import { useState, useEffect } from "react";

function useTheme() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "dark");
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(nextTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, nextTheme]);

  return [nextTheme, setTheme];
}

export default useTheme;
