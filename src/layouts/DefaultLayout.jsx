//import { ThemeDropdown } from "./ThemeDropdown";

// import Page from "../islands/Page.client";
// import Island from "../Island";

export function DefaultLayout({ meta, children }) {
  const date = new Date();
  return (
    <div class="full">
      <header>
        <nav>
          <a href="/">home</a>
          {/* <button
          className="theme-switch"
          type="button"
          data-theme-toggle
          aria-label="Change to light theme"
        >
          <p>theme: light</p>

        </button> */}
        </nav>
      </header>

      <main>{children}</main>

      {/* <Island componentName="Page">
        <Page children={children}></Page>
      </Island>*/}
      <footer>
        <p> © {date.getFullYear()} alex strand</p>
      </footer>
    </div>
  );
}
