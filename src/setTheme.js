const checkTheme = () => {
    /*On page load or when changing themes,
// best to add inline in `head` to avoid FOUC*/
    let currentTheme = localStorage.theme;
    let noThemeSet = !("theme" in localStorage);
    let prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (currentTheme === "dark" || (noThemeSet && prefersDark)) {
      document.documentElement.classList.add("dark");
      let el = document.querySelector("#dark");
      el.checked = true;
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      let el = document.querySelector("#light");
      el.checked = true;
      localStorage.setItem("theme", "light");
    }
  };

  checkTheme();