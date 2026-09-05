import React, { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  category: string;
  link: string;
}

const searchDatabase: SearchResult[] = [
  { title: "Admission Enquiry Form & Procedure", category: "Admissions", link: "#admission" },
  { title: "Academic Calendar 2025-26", category: "Calendar", link: "#calendar" },
  { title: "Fee Structure & Instalment Rules", category: "Admissions", link: "#fee-structure" },
  { title: "Hostel & Residential Boarding Facilities", category: "Infrastructure", link: "#boarding" },
  { title: "Scholarship Test 2025-26 Announcements", category: "Academics", link: "#scholarship" },
  { title: "Wushu & Martial Arts World Class Arena", category: "Sports", link: "#sports" },
  { title: "Chairman Shri Suresh Singh Bhadoria's Message", category: "About Us", link: "#messages" },
  { title: "Mandatory Public Disclosure 2026-27 (CBSE)", category: "Compliance", link: "#disclosure" },
  { title: "Transfer Certificate (TC) Verification", category: "Academics", link: "#tc" },
  { title: "School Uniform & Book List", category: "Academics", link: "#uniform" },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredResults = query.trim()
    ? searchDatabase.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchDatabase.slice(0, 5);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        style={{ maxWidth: "600px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Search size={20} />
            <h3>Search Mount Index Portal</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="search"
              autoFocus
              className="form-input"
              style={{
                paddingLeft: "42px",
                fontSize: "1.05rem",
                height: "48px",
              }}
              placeholder="Search circulars, admission, fee, sports..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search
              size={20}
              color="#94a3b8"
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b", marginBottom: "10px" }}>
            {query.trim() ? `Search Results (${filteredResults.length})` : "Quick Navigation Highlights"}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((res, i) => (
                <a
                  key={i}
                  href={res.link}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0fdf4";
                    e.currentTarget.style.borderColor = "#1c6836";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8fafc";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#045896",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "2px",
                      }}
                    >
                      {res.category}
                    </span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1e293b" }}>
                      {res.title}
                    </span>
                  </div>
                  <ArrowRight size={16} color="#1c6836" />
                </a>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "20px", color: "#64748b" }}>
                No results found for &ldquo;{query}&rdquo;. Try another term.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
