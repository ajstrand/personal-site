import { useState, useEffect } from "preact/hooks";
import Island from "../Island.jsx";

export function DefaultLayout({ meta, children }) {
  return (
    <main class="bg-neutral-100 dark:bg-slate-800 text-green-500 dark:text-yellow-500 w-screen h-screen p-3 flex flex-col justify-start items-start">
      <nav>
        <a href="/">Home</a>
        <ThemeSwitch />
      </nav>
      {children}
    </main>
  );
}

const ThemeSwitch = () => (
  <Island componentName="ThemeButton" islandTag="span">
    <ThemeButton />
  </Island>
);

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      if (localStorage.getItem('theme') === "dark") {
        document.querySelector("html").classList.remove("light");
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
        document.querySelector("html").classList.add("light");
      }
    }
  };

  useEffect(() => {
    // On page load or when changing themes,
    // best to add inline in `head` to avoid FOUC
    let currentTheme = localStorage.theme;
    let noThemeSet = !("theme" in localStorage)
    let prefersDark =  window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (
    currentTheme === "dark" ||
      (noThemeSet &&
       prefersDark)
    ) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDarkMode(true);

    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDarkMode(false);

    }
  }, []);
  return (
    <button class="outline-black outline-3" onClick={() => toggleDarkMode()}>
      {darkMode ? "light" : "dark"}
    </button>
  );
};
