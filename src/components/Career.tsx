import "./styles/Career.css";

const experience = [
  {
    role: "Senior Engineer",
    company: "Credit Karma / Intuit",
    year: "NOW",
    bullets: [
      "Built JML lifecycle workflows in Java on SailPoint IIQ governing 3,000 identities across 10 connected applications, replacing a fully manual operations process.",
      "Designed an org-wide IAM data pipeline on GCP that resolves IAM bindings, joins SailPoint entitlements, and publishes access catalog reports — replacing a manual quarterly audit.",
      "Architected the data layer for an MCP-based GenAI on-call agent that lets engineers resolve GCP IAM questions in natural language instead of parsing raw binding files.",
    ],
  },
  {
    role: "Engineering Lead",
    company: "Diadem Capital",
    year: "2024",
    bullets: [
      "Led full-stack engineering on a 9-person team building a FinTech investor-founder matching platform for 1,700 investors.",
      "Built a matching engine evaluating 100+ variables per startup to generate ranked investor recommendations across 5 investor types.",
      "Set up AWS CI/CD pipelines that reduced deployment effort by 40% across the team.",
    ],
  },
  {
    role: "Senior SWE",
    company: "Goldman Sachs",
    year: "2019–22",
    bullets: [
      "Built an automated reconciliation system processing millions of financial records daily, cutting manual reconciliation effort by 75%.",
      "Reduced Oracle SQL query execution time by 40% through targeted indexing and query plan analysis.",
      "Wrote 200+ unit and integration tests reaching 85% coverage; drove TDD practices across the team.",
    ],
  },
  {
    role: "MS Software Eng.",
    company: "SJSU",
    year: "2022–24",
    bullets: [
      "Master of Science in Software Engineering with dual specialization in Enterprise Software Development and Security Engineering.",
      "Built AI-powered exam grading platform (Automatic Grader) used in production by SJSU professors via Amazon Textract pipelines.",
      "Capstone: decentralized NFT marketplace on Ethereum with live auction and on-chain token ID guarantees.",
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((item) => (
            <div className="career-info-box" key={item.company}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <ul className="career-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
