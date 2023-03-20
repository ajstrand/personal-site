import "preact/debug";
import { hydrateIslands } from "./clientHydrate.jsx";
import ExampleComponent from "./components/ExampleComponent.jsx";
import FootnoteTest from "./components/FootNoteTest.jsx";

let els = document.querySelectorAll("input[type=radio]");
els.forEach((el) => {
  el.addEventListener("change", (e) => {
    let checked = e.currentTarget.checked;
    let value = e.currentTarget.value;
    if (checked && value === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
   
    } if(checked && value === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

hydrateIslands({ ExampleComponent, FootnoteTest });
