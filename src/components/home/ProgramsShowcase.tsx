import React from "react";
import { schoolPrograms } from "../../data/programsData";

export const ProgramsShowcase: React.FC = () => {
  return (
    <div className="programmes-container" id="programs">
      <h3 className="programmes-heading">PROGRAMMES</h3>
      <div className="programmes-grid">
        {schoolPrograms.map((prog) => (
          <a key={prog.id} href={prog.link} className="program-card">
            <div className="program-icon-circle">
              <img src={prog.image} alt={prog.name} loading="lazy" />
            </div>
            <div className="program-name">
              {prog.name}
              <br />
              {prog.subtitle}
            </div>
            <div className="program-age">{prog.ageGroup}</div>
          </a>
        ))}
      </div>
    </div>
  );
};
