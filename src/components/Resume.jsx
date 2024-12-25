const Resume = () => {
  return (
    <p className="resume">
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
