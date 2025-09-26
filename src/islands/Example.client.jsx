import { useState, useEffect } from "preact/hooks";


const Example = (props) => {
  const [textIsShowing, setAnimation] = useState(false);
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
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
    </div>
  );
};

export default Example;
