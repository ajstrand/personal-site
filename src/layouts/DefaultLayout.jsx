const ThemeToggle = () => (
  <div class="c-toggle">
    <label for="light">Light mode</label>
    <span class="c-toggle__wrapper">
      <input type="radio" name="theme" id="light" checked />
      <input type="radio" name="theme" id="dark" />
      <span aria-hidden="true" class="c-toggle__background"></span>
      <span aria-hidden="true" class="c-toggle__switcher"></span>
    </span>
    <label for="dark">Dark mode</label>
  </div>
);

export function DefaultLayout({ meta, children }) {
  return (
    <main class="page bg-neutral dark:bg-blue text-blue dark:text-yellow-500 w-screen h-screen p-3 flex flex-col justify-start items-start">
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
  );
}
