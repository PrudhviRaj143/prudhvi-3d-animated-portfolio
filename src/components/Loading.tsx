import { useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [exiting, setExiting] = useState(false);
  const exitStarted = useRef(false);

  if (percent >= 100 && !exitStarted.current) {
    exitStarted.current = true;
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        import("./utils/initialFX").then((module) => {
          if (module.initialFX) module.initialFX();
          setIsLoading(false);
        });
      }, 950);
    }, 300);
  }

  const displayPct = Math.min(percent, 100);

  return (
    <div className={`ls-root ${exiting ? "ls-exit" : ""}`}>

      {/* Corner labels */}
      <span className="ls-corner ls-tl">PM</span>
      <span className="ls-corner ls-tr">PORTFOLIO · 2026</span>

      {/* Center stage */}
      <div className="ls-center">

        {/* Top rule — expands outward */}
        <div className="ls-rule ls-rule-top">
          <div className="ls-rule-line" />
        </div>

        {/* Name block */}
        <div className="ls-name" aria-label="Prudhvi Raj Medikonduri">
          <div className="ls-name-row">
            <span className="ls-name-word ls-delay-1">PRUDHVI</span>
            <span className="ls-name-word ls-name-accent ls-delay-2">RAJ</span>
          </div>
          <div className="ls-name-row">
            <span className="ls-name-word ls-delay-3">MEDIKONDURI</span>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="ls-rule ls-rule-bottom">
          <div className="ls-rule-line" />
        </div>

        {/* Role */}
        <p className="ls-role">
          <span className="ls-role-item ls-delay-4">Senior Engineer</span>
          <span className="ls-dot">·</span>
          <span className="ls-role-item ls-delay-5">Backend</span>
          <span className="ls-dot">·</span>
          <span className="ls-role-item ls-delay-6">AI</span>
        </p>

      </div>

      {/* Progress block — bottom of screen */}
      <div className="ls-progress">
        <div className="ls-bar-track">
          <div className="ls-bar-fill" style={{ width: `${displayPct}%` }} />
        </div>
        <div className="ls-progress-meta">
          <span className="ls-loading-label">Loading</span>
          <span className="ls-pct">{displayPct}%</span>
        </div>
      </div>

    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) clearInterval(interval);
      }, 2000);
    }
  }, 100);

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 20);
    });
  }

  return { loaded, percent };
};
