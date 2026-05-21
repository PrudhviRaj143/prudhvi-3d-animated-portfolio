import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner section-container">

        {/* Big editorial heading */}
        <div className="contact-heading">
          <p className="contact-label">Contact</p>
          <h2 className="contact-title">
            Let's build<br />
            <span>something great.</span>
          </h2>
        </div>

        {/* Info grid */}
        <div className="contact-grid">

          {/* Column 1 — Reach */}
          <div className="contact-col">
            <span className="contact-col-label">Reach</span>
            <a
              href="mailto:prudhvi.medikonduri@gmail.com"
              className="contact-link-line"
              data-cursor="disable"
            >
              <span>prudhvi.medikonduri@gmail.com</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
            <a
              href="https://www.linkedin.com/in/prudhvi-raj-medikonduri/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-line"
              data-cursor="disable"
            >
              <span>linkedin.com/in/prudhvi-raj-medikonduri</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
          </div>

          {/* Column 2 — Social */}
          <div className="contact-col">
            <span className="contact-col-label">Social</span>
            <a
              href="https://github.com/PrudhviRaj143"
              target="_blank"
              rel="noreferrer"
              className="contact-link-line"
              data-cursor="disable"
            >
              <span>GitHub</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
            <a
              href="https://www.linkedin.com/in/prudhvi-raj-medikonduri/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-line"
              data-cursor="disable"
            >
              <span>LinkedIn</span>
              <MdArrowOutward className="contact-link-arrow" />
            </a>
          </div>

          {/* Column 3 — Education */}
          <div className="contact-col">
            <span className="contact-col-label">Education</span>
            <div className="contact-edu">
              <p className="contact-edu-degree">MS Software Engineering</p>
              <p className="contact-edu-school">San Jose State University</p>
              <p className="contact-edu-year">2022 – 2024</p>
            </div>
            <div className="contact-edu">
              <p className="contact-edu-degree">BTech Computer Science</p>
              <p className="contact-edu-school">VR Siddhartha Engineering College</p>
              <p className="contact-edu-year">2015 – 2019</p>
            </div>
          </div>

        </div>

        {/* Footer strip */}
        <div className="contact-footer">
          <span className="contact-copy">
            <MdCopyright /> 2026 Prudhvi Raj Medikonduri
          </span>
          <span className="contact-credit">
            Designed and Developed by <span>Prudhvi Raj Medikonduri</span>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
