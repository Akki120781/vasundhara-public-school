import React, { useRef } from "react";
import { galleryImages } from "../../data/galleryData";
import type { GalleryImage } from "../../data/galleryData";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface CampusGalleryProps {
  onImageClick?: (image: GalleryImage) => void;
}

export const CampusGallery: React.FC<CampusGalleryProps> = ({ onImageClick }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate images to produce an uninterrupted seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  const scrollManual = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Campus Gallery</h2>
          <p className="section-subtitle">
            Experience our vibrant campus infrastructure, smart classrooms, sports
            fields, and learning spaces.
          </p>
        </div>

        {/* Carousel Container with Left/Right manual buttons */}
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => scrollManual("left")}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #cbd5e1",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Previous photos"
          >
            <ChevronLeft size={22} color="#1c6836" />
          </button>

          <button
            type="button"
            onClick={() => scrollManual("right")}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #cbd5e1",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Next photos"
          >
            <ChevronRight size={22} color="#1c6836" />
          </button>

          <div className="gallery-slider-wrapper" ref={trackRef}>
            <div className="gallery-track">
              {duplicatedImages.map((img, idx) => (
                <div
                  key={`${img.id}-${idx}`}
                  className="gallery-slide-item"
                  onClick={() => onImageClick && onImageClick(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    style={img.id === "g1" ? { objectPosition: "center 56.5%" } : undefined}
                  />
                  <div className="gallery-slide-caption">
                    <span>{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Gallery Button */}
        <div className="gallery-cta-wrapper">
          <a href="#gallery-full" className="btn-view-gallery">
            <ImageIcon size={16} style={{ display: "inline", marginRight: "8px" }} />
            <span>View Full Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
};
