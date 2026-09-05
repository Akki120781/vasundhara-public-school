import React from "react";
import { newsArticles } from "../../data/newsData";
import { Calendar, ArrowRight } from "lucide-react";

export const UpdatedNewsGrid: React.FC = () => {
  return (
    <section className="updated-news-section" id="news">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Updated News</h2>
          <p className="section-subtitle">
            Celebrating our students&apos; milestones, media mentions, and stories
            from the Mount Index family.
          </p>
        </div>

        <div className="news-cards-grid">
          {newsArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card-thumb">
                <img src={article.image} alt={article.title} loading="lazy" />
                <span className="news-card-category">{article.category}</span>
              </div>

              <div className="news-card-body">
                <h3 className="news-card-title">
                  <a href={article.link}>{article.title}</a>
                </h3>
                <p className="news-card-text">{article.excerpt}</p>

                <div className="news-card-footer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <a
                    href={article.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
