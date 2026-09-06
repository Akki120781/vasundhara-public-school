import React, { useState, useEffect } from "react";
import { navigationItems } from "../../data/navigationData";
import {
  X,
  Search,
  ChevronDown,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import {
  FacebookIcon,
  WhatsappIcon,
} from "../ui/SocialIcons";

interface LeftDrawerNavbarProps {
  onOpenEnquiry: () => void;
  onOpenSearch: () => void;
}

export const LeftDrawerNavbar: React.FC<LeftDrawerNavbarProps> = ({
  onOpenEnquiry,
  onOpenSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      {/* Normal Document Flow Header with Left 3-Line Opener & Normal Branding */}
      <header className="site-header-normal">
        <div className="container site-header-normal-inner">
          {/* Left Side: 3-Line Menu Opener + Normal School Branding */}
          <div className="header-left-cluster">
            <button
              type="button"
              className="menu-opener-btn-normal"
              onClick={() => setIsOpen(true)}
              aria-label="Open Navigation Menu"
              title="Open Navigation Menu"
              id="left-drawer-toggle-btn"
            >
              <span className="opener-bar"></span>
              <span className="opener-bar"></span>
              <span className="opener-bar"></span>
            </button>

            <a href="#" className="site-branding-normal" aria-label="Vasundhara Public School Home">
              <div className="school-logo-badge">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="46" fill="#1c6836" stroke="#eda423" strokeWidth="3" />
                  <circle cx="50" cy="50" r="41" fill="#ffffff" />
                  <path
                    d="M50 16 C30 16 26 28 26 50 C26 72 50 84 50 84 C50 84 74 72 74 50 C74 28 70 16 50 16 Z"
                    fill="#1c6836"
                  />
                  <path
                    d="M50 48 C44 43 35 44 32 46 V66 C35 64 44 63 50 67 C56 63 65 64 68 66 V46 C65 44 56 43 50 48 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M50 26 C53 32 57 35 55 41 C54 43 52 44 50 44 C48 44 46 43 45 41 C43 35 47 32 50 26 Z"
                    fill="#eda423"
                  />
                </svg>
              </div>
              <div className="school-branding-text">
                <h1 className="header-school-name">Vasundhara Public School</h1>
                <p className="header-school-affiliation">M.P. Board Recognized Co-Ed School &bull; Punjapura, Dewas (UDISE: 23230413310)</p>
              </div>
            </a>
          </div>

          {/* Right Side: Fee Payment Link, Admission Enquiry Button & Search */}
          <div className="header-right-cluster">
            <a
              href="#enquiry-modal"
              onClick={(e) => {
                e.preventDefault();
                onOpenEnquiry();
              }}
              className="header-fee-payment-link"
              title="Fee Payment & Inquiry"
            >
              Fee &amp; Admissions
            </a>

            <button
              type="button"
              className="btn-enquiry-header-normal"
              onClick={onOpenEnquiry}
              title="Open Admission Enquiry"
              id="top-admission-enquiry-btn"
            >
              <FileText size={15} />
              <span>Admission Enquiry</span>
            </button>

            <button
              type="button"
              className="search-circle-btn-normal"
              onClick={onOpenSearch}
              title="Search Portal"
              aria-label="Search"
              id="top-search-btn"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Left Slide-Out Navigation Drawer */}
      <div
        className={`left-drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className={`left-nav-drawer ${isOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-branding">
              <span className="drawer-title-mount">VASUNDHARA <span className="drawer-title-index">PUBLIC</span></span>
              <span className="drawer-subtitle">SCHOOL &bull; PUNJAPURA, DEWAS</span>
            </div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Search Box */}
          <div className="drawer-search-wrap">
            <button
              type="button"
              className="drawer-search-trigger"
              onClick={() => {
                setIsOpen(false);
                onOpenSearch();
              }}
            >
              <Search size={16} color="#0b6738" />
              <span>Search courses, circulars, fees...</span>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="drawer-nav-menu">
            <ul>
              {navigationItems.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = expandedItems.includes(item.title);

                return (
                  <li key={item.title} className="drawer-nav-item">
                    <div className="drawer-nav-link-row">
                      <a
                        href={item.href}
                        className="drawer-nav-link"
                        onClick={(e) => {
                          if (item.href === "#enquiry-modal") {
                            e.preventDefault();
                            setIsOpen(false);
                            onOpenEnquiry();
                          } else if (hasChildren) {
                            toggleDropdown(item.title, e);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.title}
                      </a>
                      {hasChildren && (
                        <button
                          type="button"
                          className={`drawer-expand-btn ${isExpanded ? "rotated" : ""}`}
                          onClick={(e) => toggleDropdown(item.title, e)}
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          <ChevronDown size={18} />
                        </button>
                      )}
                    </div>

                    {/* Level 2 Submenu */}
                    {hasChildren && isExpanded && (
                      <ul className="drawer-submenu">
                        {item.children!.map((child) => {
                          const hasSubChildren = Boolean(
                            child.subChildren && child.subChildren.length > 0
                          );
                          const isSubExpanded = expandedItems.includes(child.title);

                          return (
                            <li key={child.title} className="drawer-submenu-item">
                              <div className="drawer-nav-link-row">
                                <a
                                  href={child.href}
                                  className="drawer-sublink"
                                  onClick={(e) => {
                                    if (child.href === "#enquiry-modal") {
                                      e.preventDefault();
                                      setIsOpen(false);
                                      onOpenEnquiry();
                                    } else if (hasSubChildren) {
                                      toggleDropdown(child.title, e);
                                    } else {
                                      setIsOpen(false);
                                    }
                                  }}
                                >
                                  {child.title}
                                </a>
                                {hasSubChildren && (
                                  <button
                                    type="button"
                                    className={`drawer-expand-btn ${isSubExpanded ? "rotated" : ""}`}
                                    onClick={(e) => toggleDropdown(child.title, e)}
                                    aria-label={`Toggle ${child.title} sub-items`}
                                  >
                                    <ChevronDown size={15} />
                                  </button>
                                )}
                              </div>

                              {/* Level 3 Submenu */}
                              {hasSubChildren && isSubExpanded && (
                                <ul className="drawer-sub-submenu">
                                  {child.subChildren!.map((sub) => (
                                    <li key={sub.title}>
                                      <a
                                        href={sub.href}
                                        className="drawer-sub-sublink"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        &bull; {sub.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Footer with Quick Contact & Operating Hours */}
          <div className="drawer-footer">
            <div className="drawer-contact-item">
              <Phone size={14} color="#0b6738" />
              <span>Punjapura, Dist. Dewas - 455227 (M.P.)</span>
            </div>
            <div className="drawer-contact-item">
              <Mail size={14} color="#0b6738" />
              <span>Hours: Mon - Sat 8:00 AM - 2:00 PM</span>
            </div>
            <div className="drawer-contact-item">
              <Mail size={14} color="#0b6738" />
              <span>admissions@vasundharapublic.in</span>
            </div>

            <div className="drawer-socials">
              <a href="https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET" target="_blank" rel="noreferrer" aria-label="Justdial Listing" title="Verified Justdial Profile">
                <FacebookIcon size={16} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919999000000&text=Hello%20Vasundhara%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions." target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsappIcon size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
