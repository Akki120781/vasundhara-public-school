import React, { useState } from "react";
import { announcements } from "../../data/announcementsData";
import { leadershipMessages } from "../../data/leadershipData";
import { Bell, ArrowUpRight, Pause, Play } from "lucide-react";

export const NewsAndMessages: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to achieve seamless infinite scroll
  const displayAnnouncements = [...announcements, ...announcements];

  return (
    <section className="news-messages-section" id="messages">
      <div className="container">
        <div className="news-messages-grid">
          {/* Column 1: Vertical Live Announcements Ticker */}
          <div className="vertical-news-box">
            <div className="news-box-header">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Bell size={20} color="#1c6836" />
                <h3 className="news-box-title">Latest Circulars</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#666666",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.78rem",
                }}
                title={isPaused ? "Resume Ticker" : "Pause Ticker"}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
                <span>{isPaused ? "Play" : "Pause"}</span>
              </button>
            </div>

            <div className="scroller-window">
              <div
                className="scroller-content"
                style={{
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {displayAnnouncements.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="news-ticker-item">
                    <div className="ticker-item-header">
                      {item.badge && (
                        <span className="ticker-badge">{item.badge}</span>
                      )}
                      <span style={{ fontSize: "0.75rem", color: "#888888" }}>
                        {item.date}
                      </span>
                    </div>
                    <h4 className="ticker-item-title">
                      <a href={item.link}>{item.title}</a>
                    </h4>
                    <p className="ticker-item-snippet">{item.snippet}</p>
                    <a href={item.link} className="ticker-item-more">
                      Read More &gt;&gt;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Leadership Messages with Hover Reveal */}
          <div className="leadership-column">
            <div className="leadership-header">
              <h3 className="news-box-title">Messages</h3>
            </div>

            <div className="leadership-grid">
              {leadershipMessages.map((leader) => (
                <div key={leader.id} className="leadership-card">
                  <div className="leadership-img-wrapper">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="leadership-img"
                      style={{ objectPosition: leader.objectPosition || "center 15%" }}
                      loading="lazy"
                    />
                    <div className="leadership-label">{leader.role}</div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="leadership-hover-overlay">
                    <h4 className="hover-role-title">{leader.role}</h4>
                    <div className="hover-person-name">{leader.name}</div>
                    <p className="hover-excerpt">{leader.excerpt}</p>
                    <a href={leader.link} className="btn-learn-more">
                      <span>Learn More</span>
                      <ArrowUpRight
                        size={14}
                        style={{ display: "inline", marginLeft: "4px" }}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
