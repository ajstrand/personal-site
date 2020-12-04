/** @jsx jsx */
import { jsx } from "@emotion/core";

const UpdatedIdea = () => {
  const linkVar = (link, text) => <a href={link}>{text}</a>;
  return (
    <p>
      built with {linkVar("https://gatsbyjs.org", "Gatsby")}{" "}
      <span>and hosted on</span> {linkVar("https://netlify.com", "Netlify")}
    </p>
  );
};

export default UpdatedIdea;
