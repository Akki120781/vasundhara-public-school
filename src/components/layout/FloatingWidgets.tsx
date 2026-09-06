import React from "react";
import { FileText } from "lucide-react";
import { WhatsappIcon } from "../ui/SocialIcons";

interface FloatingWidgetsProps {
  onOpenEnquiry: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({
  onOpenEnquiry,
}) => {
  return (
    <>
      {/* Floating Right Admission Enquiry Button (Fixed at stable position, slightly down) */}
      <button
        type="button"
        className="floating-enquiry-btn"
        onClick={onOpenEnquiry}
        title="Click for Admission Enquiry"
        id="floating-enquiry-trigger"
      >
        <FileText size={15} />
        <span>Admission Enquiry</span>
      </button>

      {/* Floating Official WhatsApp Quick Connect Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919425012345&text=Hello%20Vasundhara%20Public%20School%20Team%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <WhatsappIcon size={32} color="#ffffff" />
      </a>
    </>
  );
};
