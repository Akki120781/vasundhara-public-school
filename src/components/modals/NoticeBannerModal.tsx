import React, { useEffect } from "react";
import { X } from "lucide-react";

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop brochure-modal-backdrop" onClick={onClose}>
      <div
        className="brochure-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Vasundhara Public School Admission Announcement"
      >
        {/* Floating Top-Right Close Button (Pinned & Highly Visible on all screen sizes) */}
        <button
          type="button"
          className="brochure-close-btn"
          onClick={onClose}
          aria-label="Close Announcement"
          title="Close (Esc)"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Brochure Graphic Flyer (Clicking opens Admission Enquiry form) */}
        <div
          className="brochure-image-holder"
          onClick={() => {
            onClose();
            onOpenEnquiry();
          }}
          title="Click to open Admission Enquiry Form"
        >
          <img
            src="/images/admission-brochure.png"
            alt="Vasundhara Public School Admissions Open 2025-26 - M.P. Board Recognized, Pre-Nursery to Class X"
            className="brochure-graphic-img"
          />
        </div>

        {/* Clean Bottom Dismiss Strip - Never Obscures Any Banner Content */}
        <div className="brochure-modal-bottom-strip">
          <button
            type="button"
            className="brochure-bottom-dismiss-btn"
            onClick={onClose}
            aria-label="Close Announcement"
          >
            Close &bull; Continue to Website
          </button>
        </div>
      </div>
    </div>
  );
};

