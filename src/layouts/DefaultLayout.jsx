//import { ThemeDropdown } from "./ThemeDropdown";

import * as stylex from "@stylexjs/stylex";
//import * as stylex from "@stylexjs/stylex";

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
  },
  base: {
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    maxWidth: "70vw",
  },
  footer: {
    flex: "0",
    marginTop: "1rem",
    height: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
      </nav>
      <main {...stylex.props(styles.base)}>{children}</main>
      <footer {...stylex.props(styles.footer)}>
        <p> © {date.getFullYear()} alex strand</p>
      </footer>
    </div>
  );
}
