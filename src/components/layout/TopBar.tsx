import React from "react";
import { Phone, Mail } from "lucide-react";
import {
  FacebookIcon,
  WhatsappIcon,
} from "../ui/SocialIcons";

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-contact">
          <div className="top-bar-contact-item">
            <Phone size={14} color="#1c6836" />
            <span>Admission Hotline:</span>
            <a href="tel:+917272200000">07272-200000</a> /
            <a href="tel:+919425012345">+91 94250 12345</a>
          </div>
          <div className="top-bar-contact-item">
            <Mail size={14} color="#1c6836" />
            <a href="mailto:info@vasundharapublic.in">
              info@vasundharapublic.in
            </a>
          </div>
        </div>

        <div className="top-bar-social">
          <a
            href="https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET"
            target="_blank"
            rel="noreferrer"
            title="Justdial 4.3★ Rating"
            aria-label="Justdial"
          >
            <FacebookIcon size={14} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919425012345&text=Hello%20Vasundhara%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <WhatsappIcon size={14} />
          </a>
          <a
            href="#disclosure"
            title="UDISE: 23230413310"
            aria-label="School Details"
            style={{ fontSize: "0.75rem", color: "#1c6836", fontWeight: 700, textDecoration: "none" }}
          >
            UDISE: 23230413310
          </a>
        </div>
      </div>
    </div>
  );
};
