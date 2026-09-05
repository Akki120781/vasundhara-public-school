import React from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface NoticeBannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const NoticeBannerModal: React.FC<NoticeBannerModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        style={{ maxWidth: "520px", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: 40,
          }}
        >
          <button
            type="button"
            className="modal-close-btn"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.4)",
            }}
            onClick={onClose}
            aria-label="Close Announcement"
          >
            <X size={18} />
          </button>
        </div>

        {/* Poster Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #1c6836 0%, #0b6738 100%)",
            color: "#ffffff",
            padding: "30px 24px 20px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#eda423",
              color: "#1a1a1a",
              fontWeight: 800,
              fontSize: "0.8rem",
              padding: "4px 12px",
              borderRadius: "20px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            <Sparkles size={14} />
            Admissions Open 2025-26
          </span>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1.2 }}>
            Vasundhara Public School
          </h2>
          <p style={{ color: "#d1fae5", fontSize: "0.95rem", marginTop: "6px" }}>
            Premier Co-Ed Campus (Pre-Nursery to Class X) &bull; Punjapura, Dewas (UDISE: 23230413310)
          </p>
        </div>

        {/* Poster Image preview */}
        <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
          <img
            src="https://images.jdmagicbox.com/v2/comp/dewas/y1/9999p7272.7272.170608153633.m2y1/catalogue/vasundhara-public-school-punjapura-dewas-schools-qpblpvjpd5.jpg"
            alt="Vasundhara Public School Campus"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 56.5%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "10px 16px",
              background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)",
              color: "#ffffff",
              fontSize: "0.88rem",
              fontWeight: 600,
            }}
          >
            Empowering 670+ Students in Punjapura &amp; Dewas District
          </div>
        </div>

        <div className="modal-body" style={{ textAlign: "center", padding: "20px" }}>
          <ul
            style={{
              textAlign: "left",
              fontSize: "0.9rem",
              color: "#334155",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>&bull; <strong>28 Spacious Classrooms:</strong> Dynamic digital audio-visual learning &amp; modern labs</li>
            <li>&bull; <strong>Safe Transport Network:</strong> 3 dedicated school buses serving Punjapura &amp; surrounding villages</li>
            <li>&bull; <strong>Holistic Co-Ed Excellence:</strong> Academic mentorship, athletic events &amp; cultural celebrations</li>
          </ul>

          <button
            type="button"
            className="btn-enquiry"
            style={{ width: "100%", justifyContent: "center", padding: "12px" }}
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
          >
            <span>Apply Now / Enquire Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
