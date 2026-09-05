import React from "react";
import { MapPin, Award } from "lucide-react";

export const HeroVideoBanner: React.FC = () => {
  return (
    <section className="hero-banner" id="slider">
      {/* Front Campus Image of Vasundhara Public School, Punjapura */}
      <div className="hero-image-wrapper">
        <img
          src="https://images.jdmagicbox.com/v2/comp/dewas/y1/9999p7272.7272.170608153633.m2y1/catalogue/vasundhara-public-school-punjapura-dewas-schools-qpblpvjpd5.jpg"
          alt="Vasundhara Public School Campus - Punjapura, Dewas"
          className="hero-campus-image"
          loading="eager"
        />
        {/* Subtle Bottom Gradient for seamless integration with highlight cards */}
        <div className="hero-bottom-gradient" />
      </div>

      {/* Campus Identity Badge in Bottom Corner */}
      <div className="hero-campus-tag">
        <div className="campus-tag-pill">
          <MapPin size={14} color="#fef08a" />
          <span>Punjapura, Dewas (M.P.)</span>
        </div>
        <div className="campus-tag-pill">
          <Award size={14} color="#fef08a" />
          <span>UDISE: 23230413310</span>
        </div>
      </div>
    </section>
  );
};
