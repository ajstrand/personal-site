//import { ThemeDropdown } from "./ThemeDropdown";

import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  nav: {
    display: "flex",
    alignItems: "flex-start",
    width: "80vw",
    margin: "0.5rem",
  },
  outer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    color: "coral",
    fontSize: "2rem",
  },
  message: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    backgroundColor: "#FFB997",
    // backgroundColor: "#1e1a1d",
  },
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "70vw",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export function DefaultLayout({ meta, children }) {
  const date = new Date();
  return (
    <div {...stylex.props(styles.outer)}>
      <div {...stylex.props(styles.message)}>
        <p>This site is being redesigned, so not all content is present</p>
      </div>
      <nav {...stylex.props(styles.nav)}>
        <a href="/">home</a>
        {/* <a class="m-1" href="/garden">
          garden
        </a> */}
        {/* <ThemeDropdown /> */}
      </nav>
      <main {...stylex.props(styles.base)}>{children}</main>
      <footer>
        <p> © {date.getFullYear()} alex strand</p>
      </footer>
    </div>
  );
}
