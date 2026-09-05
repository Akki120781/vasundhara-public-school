import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FacebookIcon,
  YoutubeIcon,
} from "../ui/SocialIcons";

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="site-footer" id="colophon">
      <div className="container">
        <div className="footer-widgets-grid">
          {/* Column 1: School Facilities & Highlights */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Campus Facilities</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#facilities">28 Modern &amp; Spacious Classrooms</a>
              </li>
              <li>
                <a href="#facilities">Dedicated School Library &amp; Reading Room</a>
              </li>
              <li>
                <a href="#facilities">Sports Playground &amp; Athletics Ground</a>
              </li>
              <li>
                <a href="#facilities">3 Dedicated Transport Buses (Rural &amp; Town Routes)</a>
              </li>
              <li>
                <a href="#facilities">Science &amp; Computer Practical Learning</a>
              </li>
              <li>
                <a href="#facilities">Co-Educational (Kindergarten to Class XII)</a>
              </li>
              <li>
                <a
                  href="https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#eda423" }}
                >
                  Rated 4.3/5 on Justdial (19 Verified Reviews)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#enquiry-form"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenEnquiry();
                  }}
                >
                  Admission Enquiry Form
                </a>
              </li>
              <li>
                <a href="#programs">Educational Wings (Nursery to 12th)</a>
              </li>
              <li>
                <a href="#gallery">Campus Photo Gallery</a>
              </li>
              <li>
                <a href="#calendar">Academic Calendar &amp; Schedule</a>
              </li>
              <li>
                <a href="#fee-structure">Fee Structure &amp; Guidelines</a>
              </li>
              <li>
                <a href="#transport">School Bus Transport Details</a>
              </li>
              <li>
                <a href="#disclosure">Mandatory Public Disclosure</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address & Contact Info */}
          <div className="footer-widget">
            <h3 className="footer-widget-title">Address &amp; Contact</h3>
            <div className="footer-address-block">
              <p>
                <MapPin
                  size={16}
                  color="#eda423"
                  style={{ display: "inline", marginRight: "6px" }}
                />
                <b>Campus: </b>Vasundhara Public School, Punjapura, District Dewas (M.P.) - 455227
              </p>
              <p>
                <Phone
                  size={16}
                  color="#eda423"
                  style={{ display: "inline", marginRight: "6px" }}
                />
                <b>UDISE Code: </b>23230413310
              </p>
              <p>
                <Phone
                  size={16}
                  color="#eda423"
                  style={{ display: "inline", marginRight: "6px" }}
                />
                <b>Hours: </b>Mon &ndash; Sat: 8:00 AM &ndash; 2:00 PM (Sunday Closed)
              </p>
              <p>
                <Mail
                  size={16}
                  color="#eda423"
                  style={{ display: "inline", marginRight: "6px" }}
                />
                <b>Email: </b>
                <a
                  href="mailto:info@vasundharapublic.in"
                  style={{ color: "#cbd5e1" }}
                >
                  info@vasundharapublic.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <p>
              Copyright &copy; {new Date().getFullYear()} Vasundhara Public School, Punjapura, Dewas. All Rights Reserved.
            </p>

            <div className="footer-social-networks">
              <a
                href="https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET"
                target="_blank"
                rel="noreferrer"
                aria-label="Justdial Listing"
                title="Justdial Verified Profile"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919999000000&text=Hello%20Vasundhara%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp Inquiry"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
