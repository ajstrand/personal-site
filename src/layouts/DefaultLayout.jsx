import ThemeToggle from "./ThemeToggle";

export function DefaultLayout({ meta, children }) {
  const date = new Date();
  return (
    <>
      <main class="page  w-screen h-screen px-3 pt-3 flex flex-col justify-start items-start">
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
      <footer class="flex justify-center items-center">©  {date.getFullYear()} alex strand</footer>
    </>
  );
}
