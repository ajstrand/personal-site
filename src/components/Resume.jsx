import * as stylex from "@stylexjs/stylex";

// const styles = stylex.create({
//   name: {
//     fontSize: "4rem",
//     background: "-webkit-linear-gradient(45deg, #EFA00B, #F25757 60%)",
//     backgroundClip: "text",
//     "-webkit-background-clip": "text",
//     "-webkit-text-fill-color": "transparent",
//   },
// });
const Resume = () => {
  return (
    <p className="resume">
      <span>You can view my resume</span>

      <a
        className="resume_link"
        aria-label="resume"
        target="_blank"
        href="./resume/alex_strand_resume.pdf"
      >
        here
      </a>
    </p>
  );
};

export default Resume;
