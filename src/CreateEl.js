/** @jsx jsx */
import { jsx } from "@emotion/core";
import tags from "./tags.js";

const CreateEl = (props) => {
  const { tag, obj } = props;
  let X = tags[tag] || tag;
  return <X css={obj}>{props.children}</X>;
};

export default CreateEl;
