import React from "react";
import { Calendar, PartyPopper, Newspaper, BellRing } from "lucide-react";

export const HighlightCards: React.FC = () => {
  return (
    <section className="feature-cards-section" id="info">
      <div className="container">
        {/* Connected seamlessly with flush boundaries, no white gaps, and wider width */}
        <div className="feature-cards-connected-block">
          {/* Box 1: Calendar */}
          <a href="#calendar" className="connected-feature-card card-box-1" title="School Calendar">
            <div className="connected-card-inner">
              <div className="connected-icon-wrap">
                <Calendar size={28} color="#ffffff" />
              </div>
              <div className="connected-text-wrap">
                <h3 className="connected-card-title">School Calendar</h3>
                <p className="connected-card-desc">
                  Academic Calendar 2025-26 (Nursery to Class XII) &bull; Term Assessment &amp; Vacation Timetables
                </p>
              </div>
            </div>
          </a>

          {/* Box 2: Events */}
          <a href="#events" className="connected-feature-card card-box-2" title="Events">
            <div className="connected-card-inner">
              <div className="connected-icon-wrap">
                <PartyPopper size={28} color="#ffffff" />
              </div>
              <div className="connected-text-wrap">
                <h3 className="connected-card-title">Events</h3>
                <p className="connected-card-desc">
                  “Education is the foundation upon which we build our future” &bull; Annual Sports Meet, Science Fair &amp; Bal Mela.
                </p>
              </div>
            </div>
          </a>

          {/* Box 3: Updated News */}
          <a href="#news" className="connected-feature-card card-box-3" title="Updated News">
            <div className="connected-card-inner">
              <div className="connected-icon-wrap">
                <Newspaper size={28} color="#ffffff" />
              </div>
              <div className="connected-text-wrap">
                <h3 className="connected-card-title">Updated News</h3>
                <p className="connected-card-desc">
                  Board examination merit results, district athletics medals, and academic laurels achieved by VPS students.
                </p>
              </div>
            </div>
          </a>

          {/* Box 4: Notifications / Circulars */}
          <a href="#enquiry-modal" className="connected-feature-card card-box-4" title="Notifications & Circulars">
            <div className="connected-card-inner">
              <div className="connected-icon-wrap">
                <BellRing size={28} color="#ffffff" />
              </div>
              <div className="connected-text-wrap">
                <h3 className="connected-card-title">Notifications / Circulars</h3>
                <p className="connected-card-desc">
                  Admissions Open 2025-26 (Nursery to Class XII), school bus transport route guidelines &amp; notices.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
