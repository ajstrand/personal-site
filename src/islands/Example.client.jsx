import { useState, useEffect } from "preact/hooks";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    // ":disabled": {
    //   filter: "grayscale(100%)",
    // },
    // cursor: {
    //   ":hover": "not-allowed",
    // },
    outline: {
      ":focusVisible": "3px solid var(--blue)",
      ":active": "3px solid var(--blue)",
    },
    outlineOffset: {
      ":focusVisible": "3px",
      ":active": "3px",
    },
    borderRadius: {
      ":focusVisible": "0.125rem",
      ":active": "0.125rem",
    },

    color: "#000000",
    fontWeight: "bold",
    padding: "10px",
    cursor: "pointer",
    borderColor: "#000000",
    borderWidth: "2px",
    backgroundColor: {
      default: "#00a96e",
      ":hover": "#e0819b",
      ":active": "#e0819b",
    },
    boxShadow: {
      default: "0",
      ":hover": "2px 2px 0 rgba(0,0,0,1)",
    },
  },
});

const Example = (props) => {
  const [textIsShowing, setAnimation] = useState(false);
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div {...stylex.props(styles.base)}>
      <button
        {...stylex.props(styles.button)}
        //className="h-12 text-white border-black border-2 p-2.5 bg-[#00a96e] hover:bg-[#e0819b] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#e0819b] focus:ring focus:ring-blue-500 "
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
