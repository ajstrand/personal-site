import {
  FootnoteRef as Ref,
  Footnotes,
  FootnotesProvider,
} from "../../footnotes/react-footnotes-a11y.es";

const FootnoteTest = () => {
  return (
    <article>
      <FootnotesProvider>
        <p>
          Start editing to see some{" "}
          <Ref description="Magic may or may not be happening">magic</Ref>{" "}
          happen!
        </p>

        <Footnotes />
      </FootnotesProvider>
    </article>
  );
};

export default FootnoteTest;
