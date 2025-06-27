//import { ThemeDropdown } from "./ThemeDropdown";

import Viewport from "../islands/Viewport.client";
import Island from "../Island"

export function DefaultLayout({ meta, children }) {
  const date = new Date();
  return (
    <div>

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
      <div className="viewportTest"></div>
      <Island componentName="Viewport">
        <Viewport>
        </Viewport>
      </Island>

      <main>{children}</main>

      <footer>
        <p> © {date.getFullYear()} alex strand</p>
      </footer>
    </div>
  );
}
