import "preact/debug";
import { hydrateIslands } from "./clientHydrate.jsx";
import CurrentTime from "./components/CurrentTime.jsx";
import FootnoteTest from "./components/FootNoteTest.jsx";

let els = document.querySelectorAll("input[type=radio]");
els.forEach((el) => {
  el.addEventListener("change", (e) => {
    let checked = e.currentTarget.checked;
    let value = e.currentTarget.value;
    if (checked && value === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    if (checked && value === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });
});

hydrateIslands({ CurrentTime, FootnoteTest });
