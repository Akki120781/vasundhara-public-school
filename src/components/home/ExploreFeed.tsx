import React, { useState } from "react";
import { socialFeedPosts } from "../../data/socialFeedData";
import type { SocialPost } from "../../data/socialFeedData";
import { ThumbsUp, MessageCircle, ExternalLink, Plus, Share2 } from "lucide-react";

interface ExploreFeedProps {
  onSelectPost: (post: SocialPost) => void;
}

export const ExploreFeed: React.FC<ExploreFeedProps> = ({ onSelectPost }) => {
  const [posts, setPosts] = useState(socialFeedPosts);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <section className="student-stories-parallax-section" id="testimonials">
      <div className="parallax-dark-overlay">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "30px" }}>
            <h2 className="section-title" style={{ color: "#ffffff" }}>
              Explore VPS Punjapura
            </h2>
            <p className="section-subtitle" style={{ color: "#e2e8f0" }}>
              Campus moments, cultural celebrations, and student milestones from Vasundhara Public School.
            </p>
          </div>

          {/* List format cards matching original efbl-feeds-thumbnail layout */}
          <div className="explore-feed-list-container">
            {posts.map((post) => (
              <div
                key={post.id}
                className="explore-feed-list-item"
                onClick={() => onSelectPost(post)}
              >
                {/* Left Column: Image with Overlay Zoom */}
                <div className="feed-item-image-col">
                  <img src={post.image} alt={post.caption} loading="lazy" />
                  <div className="feed-image-hover-plus">
                    <Plus size={28} color="#ffffff" />
                  </div>
                </div>

                {/* Right Column: Profile, Tag, Caption, Reactions */}
                <div className="feed-item-content-col">
                  <div className="feed-profile-row">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&q=80"
                      alt="VPS Punjapura"
                      className="feed-profile-avatar"
                    />
                    <div>
                      <h4 className="feed-profile-name">{post.author}</h4>
                      <span className="feed-post-time">{post.timestamp}</span>
                    </div>
                  </div>

                  {/* Added tag division to eliminate awkward vertical spacing */}
                  <div className="feed-category-tag-pill">
                    {post.tag}
                  </div>

                  <p className="feed-post-caption">{post.caption}</p>

                  {/* Post Footer with Reactions & Actions */}
                  <div className="feed-post-actions-row">
                    <div className="feed-reactions-group">
                      <button
                        type="button"
                        className="reaction-btn"
                        onClick={(e) => handleLike(post.id, e)}
                        title="Like this post"
                      >
                        <ThumbsUp size={15} color="#045896" />
                        <span>{post.likes}</span>
                      </button>

                      <div className="reaction-count">
                        <MessageCircle size={15} color="#64748b" />
                        <span>{post.comments}</span>
                      </div>
                    </div>

                    <div className="feed-links-group">
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="feed-view-fb-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Details</span>
                        <ExternalLink size={13} style={{ display: "inline", marginLeft: "4px" }} />
                      </a>

                      <button
                        type="button"
                        className="feed-share-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (navigator.share) {
                            navigator.share({
                              title: post.author,
                              text: post.caption,
                              url: post.postUrl,
                            }).catch(() => {});
                          } else {
                            alert("Link copied to clipboard!");
                          }
                        }}
                      >
                        <Share2 size={13} style={{ display: "inline", marginRight: "4px" }} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
