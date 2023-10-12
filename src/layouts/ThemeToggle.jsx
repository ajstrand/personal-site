import Sun from "./Sun";
import Moon from "./Moon";
const ThemeToggle = () => (
  <div class="flex justify-center items-center">
    <div class="c-toggle flex justify-center items-center">
      <label for="light">
        <span>Light</span>
      </label>
      <span class="c-toggle__wrapper">
        <input type="radio" value="light" name="theme" id="light" />
        <input type="radio" value="dark" name="theme" id="dark" />
        <span aria-hidden="true" class="c-toggle__background">
        </span>
        <span aria-hidden="true" class="c-toggle__switcher">
        </span>
		<Sun aria-hidden="true" />
		<Moon aria-hidden="true" />
      </span>
      <label for="dark">
        <span>Dark</span>
      </label>
    </div>
  </div>
);

export default ThemeToggle;
