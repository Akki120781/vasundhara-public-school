import React from "react";
import { CreditCard, Award, ArrowRight } from "lucide-react";

interface HeaderBrandingProps {
  onOpenEnquiry: () => void;
}

export const HeaderBranding: React.FC<HeaderBrandingProps> = ({ onOpenEnquiry }) => {
  return (
    <header className="main-header">
      <div className="container main-header-inner">
        {/* Brand Logo & Receding Styled Typography */}
        <a href="#" className="header-branding" aria-label="Mount Index International School">
          {/* Authentic School Crest Emblem */}
          <div className="brand-crest-emblem">
            <svg
              width="62"
              height="62"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Golden Shield / Sun Rays */}
              <circle cx="50" cy="50" r="46" fill="#1c6836" stroke="#eda423" strokeWidth="3" />
              <circle cx="50" cy="50" r="41" fill="#ffffff" />
              {/* Green Inner Shield */}
              <path
                d="M50 16 C30 16 26 28 26 50 C26 72 50 84 50 84 C50 84 74 72 74 50 C74 28 70 16 50 16 Z"
                fill="#1c6836"
              />
              {/* Open Book of Knowledge */}
              <path
                d="M50 48 C44 43 35 44 32 46 V66 C35 64 44 63 50 67 C56 63 65 64 68 66 V46 C65 44 56 43 50 48 Z"
                fill="#ffffff"
              />
              {/* Flame of Wisdom in Gold/Amber */}
              <path
                d="M50 26 C53 32 57 35 55 41 C54 43 52 44 50 44 C48 44 46 43 45 41 C43 35 47 32 50 26 Z"
                fill="#eda423"
              />
              {/* Small Star */}
              <circle cx="50" cy="74" r="2.5" fill="#eda423" />
            </svg>
          </div>

          {/* Exact Receding Brand Typography */}
          <div className="brand-text-block">
            <div className="brand-title-mount">MOUNT</div>
            <div className="brand-title-index">INDEX</div>
            <div className="brand-title-international">INTERNATIONAL SCHOOL</div>
            <div className="brand-tagline">“Give a great start to your child”</div>
          </div>
        </a>

        {/* Central Promo Badge */}
        <div className="header-promo-banner">
          <div className="promo-badge-card">
            <Award size={26} color="#1c6836" />
            <div className="promo-badge-text">
              <h4>INDEX GROUP OF INSTITUTIONS</h4>
              <p>Excellence in Medical, Healthcare &amp; School Education</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="header-action-buttons">
          <button
            type="button"
            className="btn-enquiry"
            onClick={onOpenEnquiry}
            id="header-admission-enquiry-btn"
          >
            <span>Admission Enquiry</span>
            <ArrowRight size={15} />
          </button>

          <a
            href="https://mlzs.rayninfolabs.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-fee-payment"
            title="Pay school fees online"
          >
            <CreditCard size={15} color="#045896" />
            <span>Online Fee Payment</span>
          </a>
        </div>
      </div>
    </header>
  );
};
