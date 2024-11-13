import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  name: {
    fontFamily: "serif",
    margin: "1rem",
    fontSize: "4rem",
    background:
      "linear-gradient(51deg, #f25757 9%, #00b6ff 24%, #FFC15E 36%, #00a96e 59%, #563dd4 100%)",

    //background: "-webkit-linear-gradient(45deg, #EFA00B, #F25757 60%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});
const Name = ({ children }) => {
  return <h1 {...stylex.props(styles.name)}>{children}</h1>;
};

export default Name;
