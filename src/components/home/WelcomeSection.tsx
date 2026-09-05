import React from "react";
import { ProgramsShowcase } from "./ProgramsShowcase";
import { StatsCounter } from "./StatsCounter";

export const WelcomeSection: React.FC = () => {
  return (
    <section className="welcome-section" id="welcome">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Welcome to Vasundhara Public School
          </h2>
          <p className="welcome-lead-text">
            Vasundhara Public School in Punjapura, District Dewas (M.P.) is a premier
            co-educational institution dedicated to nurturing young minds with academic
            rigor, moral values, and holistic development. With state-of-the-art
            infrastructure spanning 28 modern classrooms, an enriched library, expansive
            sports grounds, and a dedicated fleet of 3 school transport buses, we provide a safe,
            inspiring, and future-ready learning environment. Guided by 24 experienced and
            passionate teachers, we empower over 670 students across Pre-Primary, Primary,
            Middle, and Secondary levels (Pre-Nursery to Class X) to achieve excellence in education and life.
          </p>
        </div>

        {/* 4 Core Educational Levels Banner */}
        <ProgramsShowcase />

        {/* Animated Numerical Key Stats */}
        <StatsCounter />
      </div>
    </section>
  );
};
