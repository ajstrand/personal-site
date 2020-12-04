/** @jsx jsx */
import { jsx } from "@emotion/core";
import tags from "./tags.js";

const CreateEl = (props) => {
  const { tag, obj, children, ...rest } = props;
  let X = tags[tag] || tag;
  let message = createMessage(tag, obj, children);
  let result =
    message === null ? (
      <X {...rest} css={obj}>
        {children}
      </X>
    ) : (
      <p>{message}</p>
    );
  return result;
};

export default CreateEl;

const createMessage = (tag, obj, children) => {
  let message = null;
  let tagMessage = `${tag} the type of html element you want to render isnt listed. please check the component`;
  let stylesMessage = `${obj} you havent passed styles to the element you want to render. please check the component`;
  if (tag === undefined || tag === null) {
    message = tagMessage;
  }
  if (obj === undefined || obj === null) {
    message = stylesMessage;
  }
  if (children === undefined || children === null) {
    message = `you may have forgot to pass the children prop down through your component.`;
  }
  return message;
};
