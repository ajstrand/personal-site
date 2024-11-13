import {
  FootnoteRef,
  Footnotes,
  FootnotesProvider,
} from "../../footnotes/react-footnotes-a11y.es";

// And the styles
import "../../footnotes/style.css";

const FootnoteTest = () => {
  return (
    <article>
      <FootnotesProvider footnoteTitleId="foobar">
        <FootnoteRef description="CSS Counters are nice">
          CSS counters
        </FootnoteRef>

        <Footnotes />
      </FootnotesProvider>
    </article>
  );
};

export default FootnoteTest;
