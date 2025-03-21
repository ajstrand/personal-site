// import * as stylex from "@stylexjs/stylex";

// const styles = stylex.create({
//  container: {
//   margin: 0,
//   padding: 0,
//  },
//  anchor: {
//   marginLeft: "0.3rem",
//   padding: 0,
//   color: "var(--color-fg)",
//   textDecoration: "none",
//   outline:{
//     ":hover": "2px solid var(--blue)",
//     ":focus-visible":"2px solid var(--blue)",
//   },
//   outlineOffset:{
//     ":hover": "2px",
//     ":focus-visible":"2px",

//   },
//   borderRadius:{
//     ":hover":"0.125rem",
//     ":focus-visible":"0.125rem",
//   }
// }
// });

const Resume = () => {
  return (
    <p>
      <span>You can view my resume</span>
      <a
        className="resume_link"
        aria-label="resume"
        target="_blank"
        href="./assets/alex_strand_resume.pdf"
        rel="noreferrer"
      >
        here
      </a>
    </p>
  );
};

export default Resume;
