import React from "react";
import { Users, GraduationCap, ArrowRight } from "lucide-react";

export const Accreditations: React.FC = () => {
  return (
    <section className="accreditations-section" id="accreditations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Accreditations</h2>
          <p className="section-subtitle">
            Voices of trust and journeys of success from our school community.
          </p>
        </div>

        <div className="accreditations-grid">
          {/* Card 1: Parents Speak */}
          <div className="accreditation-card">
            <div className="accreditation-card-icon-wrap" style={{ background: "#f0fdf4", borderColor: "#1c6836" }}>
              <Users size={42} color="#1c6836" />
            </div>
            <div className="accreditation-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80"
                alt="Parents Speak"
                className="accreditation-img"
                loading="lazy"
              />
            </div>
            <h3 className="accreditation-title">Parents Speak</h3>
            <p style={{ color: "#666666", fontSize: "0.92rem", marginTop: "8px", lineHeight: 1.55 }}>
              “Vasundhara Public School provides a safe, disciplined, and nurturing atmosphere in Punjapura. With reliable bus transport and dedicated teachers, our children are thriving academically and morally.”
            </p>
            <a
              href="#testimonials"
              style={{
                marginTop: "14px",
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "#0b6738",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>Read Parent Reviews</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: Alumni Speak */}
          <div className="accreditation-card">
            <div className="accreditation-card-icon-wrap" style={{ background: "#eff6ff", borderColor: "#045896" }}>
              <GraduationCap size={42} color="#045896" />
            </div>
            <div className="accreditation-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
                alt="Alumni Speak"
                className="accreditation-img"
                loading="lazy"
              />
            </div>
            <h3 className="accreditation-title">Student &amp; Alumni Voices</h3>
            <p style={{ color: "#666666", fontSize: "0.92rem", marginTop: "8px", lineHeight: 1.55 }}>
              “The caring teachers, 28 modern classrooms, and encouraging atmosphere at Vasundhara Public School gave me the foundation and self-confidence to succeed in higher education.”
            </p>
            <a
              href="#testimonials"
              style={{
                marginTop: "14px",
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "#045896",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>Explore Student Stories</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
