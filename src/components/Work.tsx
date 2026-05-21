import "./styles/Work.css";

const projects = [
  {
    number: "01",
    name: "Automatic Grader",
    period: "2023 – 2024",
    category: "AI / ML",
    highlight: "Live at SJSU",
    description:
      "AI-powered exam grading platform used in production by SJSU professors. Professors upload batches of handwritten exams; an Amazon Textract pipeline extracts content, assigns scans to students, grades against a rubric, and generates per-student feedback reports automatically.",
    tech: ["Python", "FastAPI", "Amazon Textract", "React", "MongoDB", "AWS Lambda", "S3"],
  },
  {
    number: "02",
    name: "SQL-GPT",
    period: "2023",
    category: "AI / ML",
    highlight: "30% faster responses",
    description:
      "Natural-language-to-SQL system where users query a database in plain English. The backend combines NLP models with a custom schema-aware SQL parser. Achieved 20% faster query processing and 30% lower response time vs. a rule-based baseline.",
    tech: ["Python", "NLP", "React", "Custom SQL Parser", "FastAPI"],
  },
  {
    number: "03",
    name: "NFT Trader",
    period: "Nov 2022 – Dec 2022",
    category: "Blockchain",
    highlight: "SJSU Capstone",
    description:
      "Decentralized NFT marketplace where users create, buy, and sell NFTs using BTC and ETH — via direct sale or live auction. Each minted NFT generates a distinct on-chain token ID to guarantee uniqueness.",
    tech: ["Blockchain", "Smart Contracts", "React", "Web3.js", "Solidity"],
  },
  {
    number: "04",
    name: "Bike Rental Demand Prediction",
    period: "May – Jun 2019",
    category: "Machine Learning",
    highlight: "80% accuracy",
    description:
      "ML model that predicts bike rental demand based on day of week, time of day, season, and temperature. Trained on historical rental records and validated against held-out test data to forecast future volume.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Data Analysis"],
  },
  {
    number: "05",
    name: "AR Restaurant Menu",
    period: "Dec 2018 – Mar 2019",
    category: "AR / Mobile",
    highlight: "360° 3D view",
    description:
      "AR application that renders food items as 3D models viewable from any angle on a mobile device. Customers inspect accurate portion sizes and ingredient composition before ordering, reducing menu confusion.",
    tech: ["AR", "Unity", "3D Modeling", "C#", "Vuforia"],
  },
  {
    number: "06",
    name: "Smart Agriculture — IoT",
    period: "Jan – Nov 2018",
    category: "IoT",
    highlight: "Autonomous irrigation",
    description:
      "IoT system using piezometers and sensors to monitor soil moisture in real time. When levels drop below a threshold it automatically triggers irrigation — built for low-power autonomous farming in areas with unreliable electricity.",
    tech: ["IoT", "Arduino", "Sensors", "Python", "Embedded Systems"],
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.number} className="project-card">
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.highlight && (
                    <span className="project-highlight">{project.highlight}</span>
                  )}
                </div>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tech.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
