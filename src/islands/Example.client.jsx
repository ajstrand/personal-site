import { useState, useEffect } from "preact/hooks";
import CodeDemo from "../components/CodeDemo";


const Example = (props) => {
  const [textIsShowing, setAnimation] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => setMounted(true), []);
  if(isError) {
    return <CodeDemo error={true}><p>Error loading example</p></CodeDemo>;
  }
  return (
    <CodeDemo>
      <button
        className="exampleButton"
        type="button"
        disabled={!isMounted}
        onClick={() => {
          if (textIsShowing) {
            setAnimation(false);
            return;
          }
          setAnimation(true);
        }}
      >
        {props.buttonText}
      </button>
      {textIsShowing ? <p>{props.text}</p> : null}
    </CodeDemo>
  );
};

export default Example;
