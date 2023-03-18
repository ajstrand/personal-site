import "preact/debug";
import { hydrateIslands } from "./clientHydrate.jsx";
import ExampleComponent from "./components/ExampleComponent.jsx";

const checkTheme = () => {
  /*On page load or when changing themes,
    // best to add inline in `head` to avoid FOUC*/
  let currentTheme = localStorage.theme;
  let noThemeSet = !("theme" in localStorage);
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (currentTheme === "dark" || (noThemeSet && prefersDark)) {
    document.documentElement.classList.add("dark");
    let el = document.querySelector("#dark");
    el.checked = true;
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    let el = document.querySelector("#light");
    el.checked = false;
    localStorage.setItem("theme", "light");
  }
};

checkTheme();



let els = document.querySelectorAll("input[type=radio]");
//TODO: fix this function, it's not working right
els.forEach((el) => {
  el.addEventListener("change", (e) => {
    let checked = e.currentTarget.checked;
    let value = e.currentTarget.value;
    if (checked && value === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    } if(checked && value === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
  });
});

hydrateIslands({ ExampleComponent });
