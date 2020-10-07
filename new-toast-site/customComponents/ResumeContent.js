/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import "./resumeStyles.scss";
import styled from "@emotion/styled";

const resumeDataObj = {
  header: {
    name: "Alex Strand",
    site: "https://alexstrand.dev",
    emailLabel: "ajstrand8@gmail.com",
    emailValue: "mailto:ajstrand8@gmail.com",
    phone: "419-908-6212",
  },
  education: [
    {
      schoolName: "Olivet Nazarene University",
      dateRange: "September 2011 - May 2015",
      degreeTitle: "Bachelor of Arts",
      degreeDescription: "Computer Science",
    },
  ],
  experience: [
    {
      companyName: "Chase",
      dateRange: "June 2020 - Present",
      jobTitle: "Frontend Software Engineer",
      jobDescription: [
        {
          text: `Building accessible UI components and features for Chase.com. `,
        },
      ],
    },
    {
      companyName: "OCLC",
      dateRange: "September 2018 - June 2020",
      jobTitle: "Software Developer",
      jobDescription: [
        {
          text: `Involved in a weekly  support rotation between members of my team. 
        Helped resolve questions from our customer support teams/other teams within OCLC. 
       Wrote documentation for support tasks and procedures that need done on a monthly/weekly basis. 
        This helps get other developers up to speed and share knowledge more efficiently.  `,
        },
        {
          text: `Converted the front end of our user login application(which serves over 20,000 different libraries) 
      from YUI to ES6/TypeScript using Google's Material Design in order to provide a login experience 
      that uses current design trends and performs well on mobile devices.  
      Also makes use of semantic HTML and ARIA for accessibility.  `,
        },
        {
          text: `Rewrote part of our user login/authentication application with React/Material UI components. 
    React allowed us to have a quicker and faster development experience by giving us pre built components 
    from npm as well as build a more consistent style guide, using Material UI Themeing support as a base`,
        },
        {
          text: `Wrote new API endpoints in Java for a React/Material UI component within in a legacy YUI app. 
          APIs and new UI allow librarians staff to assign access/permissions across a group of libraries/institutions.
 Assisted in building new React components for the frontend. `,
        },
      ],
    },
    {
      companyName: "Root Inc.",
      dateRange: "September 2015 - September 2018",
      jobTitle: "Software Developer",
      jobDescription: [
        {
          text: `Lead the rewriting of custom grunt plugins to work with a new webpack build system for our SPA framework. 
         Utilizing webpack allowed us be consistent with the 
        rest of our team's tech stacks for various projects and be more adaptable for the future. `,
        },
        {
          text: `Lead the development to rebuild our JQuery SPA framework in ES6/Webpack instead of JQuery/Grunt.  `,
        },
        {
          text: `Worked with a team(also solo) to develop SPA apps in JQuery for clients. 
    Collaborated with artists and content designers to build applications that met the client's needs. `,
        },
        {
          text: `Worked with  a team of developers to make updates and add features to internal Node JS applications for our development team. `,
        },
      ],
    },
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Java"],
    technologies: [
      "React",
      "React Native",
      "Material UI",
      "Jest",
      "Webpack",
      "JQuery",
      "SCSS",
      "NodeJS",
      "Spock",
      "Spring",
      "SQL",
    ],
  },
};
const createSectionAndHeader = (sectionTitle, chilren) => {
  const jsx = (
    <div className={`${sectionTitle}Section`}>
      <span className="sectionHeader">{sectionTitle}</span>
      {chilren}
    </div>
  );
  return jsx;
};
const createExperienceSection = () => {
  const list = resumeDataObj.experience.map((block) => {
    const jsx = (
      <div className="experienceItem">
        <div className="leftColumn">
          <span className="companyName">{block.companyName}</span>
          <span className="dateRange">{block.dateRange}</span>
        </div>
        <span className="rightColumn">
          <span className="jobTitle">{block.jobTitle}</span>
          <ul className="jobDescription">
            {block.jobDescription.map((item, index) => {
              const desc = <li key={index.toString()}>{item.text}</li>;
              return desc;
            })}
          </ul>
        </span>
      </div>
    );
    return jsx;
  });
  return list;
};

const createProjectSection = (projects) => {
  let { list } = projects;
  const projectList = list.slice(0, 3).map((projectObj) => {
    const project = projectObj.node;
    const jsx = (
      <div className="projectItem">
        <div className="leftColumn">
          <span className="projectName">{project.title}</span>
          <span className="dateRange">{project.dateRange}</span>
        </div>
        <span className="rightColumn">
          <ul className="projectDescription">
            <li>{project.desc}</li>
          </ul>
        </span>
      </div>
    );
    return jsx;
  });
  return projectList;
};
const createEducationSection = () => {
  const list = resumeDataObj.education.map((section) => {
    const jsx = (
      <div className="educationItem">
        <div className="leftColumn">
          <span className="schoolName">{section.schoolName}</span>
          <span className="dateRange">{section.dateRange}</span>
        </div>
        <span className="rightColumn">
          <span className="degreeTitle">{section.degreeTitle}</span>
          <span className="degreeDescription">{section.degreeDescription}</span>
        </span>
      </div>
    );
    return jsx;
  });
  return list;
};
const createSkillsSection = () => {
  const { languages, technologies } = resumeDataObj.skills;
  const array = languages.concat(technologies);
  const skillsList = array.map((value, index) =>
    array[index + 1] !== undefined ? value.concat(", ") : value
  );
  const jsx = <span className="description">{skillsList}</span>;
  return jsx;
};
const createHeader = () => {
  const jsx = (
    <div className="header">
      <span className="contactName">{resumeDataObj.header.name}</span>
      <ul className="contactDetails">
        <li>
          <a href={resumeDataObj.header.site} target="_blank">
            {resumeDataObj.header.site}
          </a>
        </li>
        <li>
          <a href={resumeDataObj.header.emailValue}>
            {resumeDataObj.header.emailLabel}
          </a>
        </li>
        <li>
          <a href={resumeDataObj.header.phone}>{resumeDataObj.header.phone}</a>
        </li>
      </ul>
    </div>
  );
  return jsx;
};
const ResumeGridContainer = styled.div`
  background-color: #ffffff;
  display: grid;
  width: 60%;
  @media print {
    width: 100%;
  }
`;
const ResumeContent = (projects) => {
  return (
    <ResumeGridContainer>
      {createHeader()}
      <div className="resumeBody">
        {createSectionAndHeader("experience", createExperienceSection())}
        {createSectionAndHeader("projects", createProjectSection(projects))}
        <div className="twoColumnSection">
          <div className="leftColumn">
            {createSectionAndHeader("education", createEducationSection())}
          </div>
          <div className="rightColumn">
            {createSectionAndHeader("skills", createSkillsSection())}
          </div>
        </div>
      </div>
    </ResumeGridContainer>
  );
};

export default ResumeContent;
