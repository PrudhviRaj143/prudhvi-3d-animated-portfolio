import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h2 className="about-heading">About <span>Me</span></h2>
        <p className="para">
          5 years building production systems at Goldman Sachs, Credit Karma,
          and Diadem Capital. Trading infrastructure, IAM platforms,
          event-driven pipelines. Work that needs to be reliable before it
          can be interesting.
        </p>
        <p className="para para-spaced">
          Lately my focus has shifted to AI tooling. I use the MCP protocol
          to connect LLMs to engineering workflows, so teams can automate the
          tasks that eat up time but don't need a human in the loop. Masters
          in Software Engineering from SJSU.
        </p>
      </div>
    </div>
  );
};

export default About;
