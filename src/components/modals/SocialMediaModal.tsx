import React from "react";
import type { SocialPost } from "../../data/socialFeedData";
import { X, ThumbsUp, MessageCircle, ExternalLink } from "lucide-react";

interface SocialMediaModalProps {
  post: SocialPost | null;
  onClose: () => void;
}

export const SocialMediaModal: React.FC<SocialMediaModalProps> = ({
  post,
  onClose,
}) => {
  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        style={{ maxWidth: "680px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=100&q=80"
              alt="Avatar"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                {post.author}
              </div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                {post.timestamp}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ maxHeight: "420px", overflow: "hidden", backgroundColor: "#000" }}>
          <img
            src={post.image}
            alt={post.caption}
            style={{
              width: "100%",
              maxHeight: "420px",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
        </div>

        <div className="modal-body">
          <p style={{ fontSize: "1rem", color: "#334155", lineHeight: 1.6, marginBottom: "16px" }}>
            {post.caption}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e2e8f0",
              paddingTop: "12px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", color: "#64748b", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ThumbsUp size={16} color="#045896" />
                <span>{post.likes} Likes</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MessageCircle size={16} />
                <span>{post.comments} Comments</span>
              </div>
            </div>

            <a
              href={post.postUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-enquiry"
              style={{ padding: "6px 14px", fontSize: "0.85rem" }}
            >
              <span>View On Social</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
