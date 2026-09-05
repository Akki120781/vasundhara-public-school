import React, { useState } from "react";
import { navigationItems } from "../../data/navigationData";
import { ChevronDown, ChevronRight, Search, Menu, X } from "lucide-react";

interface MainNavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiry: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  onOpenSearch,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );

  const toggleMobileItem = (title: string) => {
    setExpandedMobileItem((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="sticky-navbar">
      <div className="container navbar-inner">
        {/* Navigation links list */}
        <ul className={`nav-menu-list ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {navigationItems.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = expandedMobileItem === item.title;

            return (
              <li
                key={item.title}
                className={`nav-item ${hasChildren ? "has-dropdown" : ""} ${
                  isExpanded ? "mobile-expanded" : ""
                }`}
              >
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    if (item.href === "#enquiry-modal") {
                      e.preventDefault();
                      onOpenEnquiry();
                      setMobileMenuOpen(false);
                    } else if (hasChildren && window.innerWidth <= 768) {
                      e.preventDefault();
                      toggleMobileItem(item.title);
                    }
                  }}
                >
                  <span>{item.title}</span>
                  {hasChildren && <ChevronDown size={14} />}
                </a>

                {/* Level 2 Dropdown */}
                {hasChildren && (
                  <ul className="dropdown-menu">
                    {item.children!.map((child) => {
                      const hasSubChildren = Boolean(
                        child.subChildren && child.subChildren.length > 0
                      );

                      return (
                        <li key={child.title} className="dropdown-item">
                          <a
                            href={child.href}
                            className="dropdown-link"
                            onClick={(e) => {
                              if (child.href === "#enquiry-modal") {
                                e.preventDefault();
                                onOpenEnquiry();
                                setMobileMenuOpen(false);
                              }
                            }}
                          >
                            <span>{child.title}</span>
                            {hasSubChildren && <ChevronRight size={14} />}
                          </a>

                          {/* Level 3 Sub-dropdown */}
                          {hasSubChildren && (
                            <ul className="nested-dropdown">
                              {child.subChildren!.map((subChild) => (
                                <li key={subChild.title}>
                                  <a
                                    href={subChild.href}
                                    className="dropdown-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subChild.title}
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

        {/* Search button and Mobile Toggle */}
        <div className="nav-actions">
          <button
            type="button"
            className="search-toggle-btn"
            onClick={onOpenSearch}
            title="Search Site"
            aria-label="Search"
            id="nav-search-button"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
