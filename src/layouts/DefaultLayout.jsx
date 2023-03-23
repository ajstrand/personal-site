import ThemeToggle from "./ThemeToggle";
import Island from "../island.jsx";

export function DefaultLayout({ meta, children }) {
  return (
    <>
      <main class="page  w-screen h-screen p-3 flex flex-col justify-start items-start">
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
