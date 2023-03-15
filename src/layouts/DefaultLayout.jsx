import Sun from "./Sun";
import Moon from "./Moon";
const ThemeToggle = () => (
  <div class="flex justify-center items-center">
    <div class="sun-and-moon" aria-hidden="true">
      <Sun />
      <Moon />
    </div>
    <label for="theme-switch" class="switch-label"></label>
  </div>
);

export function DefaultLayout({ meta, children }) {
  return (
    <>
      <input type="checkbox" class="theme-switch" id="theme-switch" />
      <main class="page bg-neutral dark:bg-blue w-screen h-screen p-3 flex flex-col justify-start items-start">
        <nav class="flex justify-center items-center">
          <a class="m-1" href="/">
            home
          </a>
          <a class="m-1" href="/garden">
            garden
          </a>
          <ThemeToggle />
        </nav>
        {children}
      </main>
    </>
  );
}
