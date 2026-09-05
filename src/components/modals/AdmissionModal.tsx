import React, { useState } from "react";
import { X, CheckCircle, Send } from "lucide-react";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "Nursery",
    email: "",
    phone: "",
    mode: "Day Scholar",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: "",
      studentName: "",
      grade: "Nursery",
      email: "",
      phone: "",
      mode: "Day Scholar",
      message: "",
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Vasundhara Public School - Admission Enquiry (2025-26)</h3>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <CheckCircle
                size={54}
                color="#1c6836"
                style={{ margin: "0 auto 16px" }}
              />
              <h4
                style={{
                  fontSize: "1.4rem",
                  color: "#1c6836",
                  marginBottom: "10px",
                }}
              >
                Thank You For Your Enquiry!
              </h4>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  marginBottom: "24px",
                }}
              >
                Vasundhara Public School, Punjapura has received your admission inquiry for{" "}
                <b>{formData.studentName}</b>. Our academic coordinator will call
                you within 24 hours.
              </p>
              <button
                type="button"
                className="btn-enquiry"
                style={{ margin: "0 auto" }}
                onClick={handleReset}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label">Student Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Aarav Sharma"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                <div className="form-group">
                  <label className="form-label">Applying for Class / Wing *</label>
                  <select
                    className="form-select"
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                  >
                    <option value="Kindergarten">Kindergarten (Nursery / LKG / UKG)</option>
                    <option value="Primary (1-5)">Classes I to V (Primary Wing)</option>
                    <option value="Middle (6-8)">Classes VI to VIII (Upper Primary)</option>
                    <option value="Secondary (9-10)">Classes IX &amp; X (Secondary / Board Prep)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Transport Requirement *</label>
                  <select
                    className="form-select"
                    value={formData.mode}
                    onChange={(e) =>
                      setFormData({ ...formData, mode: e.target.value })
                    }
                  >
                    <option value="School Bus">School Bus Transport (Punjapura &amp; Surrounding)</option>
                    <option value="Self Commute">Self Commute</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="e.g. parent@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Any Questions / Remarks</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  placeholder="Tell us about previous school or specific queries..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn-form-submit">
                <Send size={16} style={{ display: "inline", marginRight: "8px" }} />
                <span>Submit Admission Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
