//import { ThemeDropdown } from "./ThemeDropdown";

import * as stylex from "@stylexjs/stylex";
import { Info } from "lucide-preact";

const styles = stylex.create({
  nav: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"flex-start",
    margin: "0.5rem auto",
  },
  outer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
  linkStyle: {
    marginRight:"1rem"
  },
  message: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    backgroundColor: "var(--blue)",
    marginBottom: "10px",
  },
  messageIcon: {
    color: "#ffffff",
    fontWeight: "bold",
    marginRight: "1rem",
  },
  base: {
    display: "flex",
    margin: "0 auto",
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
        <div {...stylex.props(styles.messageIcon)}>
          <Info />
        </div>
        <p>This site is being redesigned, so not all content is present</p>
      </div>
      <nav {...stylex.props(styles.nav)}>
        <a {...stylex.props(styles.linkStyle)} href="/">home</a>
        <button
          className="theme-switch"
          type="button"
          data-theme-toggle
          aria-label="Change to light theme"
        >
          <p>theme: light</p>
        
        </button>
      </nav>
      <main {...stylex.props(styles.base)}>{children}</main>
      <footer {...stylex.props(styles.footer)}>
        <p> © {date.getFullYear()} alex strand</p>
      </footer>
    </div>
  );
}
