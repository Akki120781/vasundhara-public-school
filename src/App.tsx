import React, { useState, useEffect } from "react";
import { LeftDrawerNavbar } from "./components/layout/LeftDrawerNavbar";
import { HeroVideoBanner } from "./components/home/HeroVideoBanner";
import { HighlightCards } from "./components/home/HighlightCards";
import { WelcomeSection } from "./components/home/WelcomeSection";
import { NewsAndMessages } from "./components/home/NewsAndMessages";
import { UpdatedNewsGrid } from "./components/home/UpdatedNewsGrid";
import { ExploreFeed } from "./components/home/ExploreFeed";
import { Accreditations } from "./components/home/Accreditations";
import { CampusGallery } from "./components/home/CampusGallery";
import { Footer } from "./components/layout/Footer";
import { FloatingWidgets } from "./components/layout/FloatingWidgets";
import { AdmissionModal } from "./components/modals/AdmissionModal";
import { SearchModal } from "./components/modals/SearchModal";
import { SocialMediaModal } from "./components/modals/SocialMediaModal";
import { NoticeBannerModal } from "./components/modals/NoticeBannerModal";
import type { SocialPost } from "./data/socialFeedData";
import type { GalleryImage } from "./data/galleryData";

export const App: React.FC = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [selectedSocialPost, setSelectedSocialPost] = useState<SocialPost | null>(null);

  // Welcome announcement modal after initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNoticeOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleGalleryClick = (image: GalleryImage) => {
    setSelectedSocialPost({
      id: image.id,
      author: "Vasundhara Public School",
      timestamp: "Campus Infrastructure",
      tag: "Infrastructure & Learning Spaces",
      caption: `${image.title} - ${image.category} facility at Vasundhara Public School, Punjapura, Dewas.`,
      image: image.src,
      likes: 54,
      comments: 7,
      postUrl: "#gallery",
    });
  };

  return (
    <div className="site-wrapper" id="page">
      {/* Slim Top Bar with Left Slide-Out Navigation Drawer */}
      <LeftDrawerNavbar
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Body */}
      <main id="main-content">
        {/* Full-width Clean Video Hero Banner */}
        <HeroVideoBanner />

        {/* 4 Connected Highlight Cards (Flush boundaries, no white gaps) */}
        <HighlightCards />

        {/* Welcome Section with 5 Programs and Stats Counters */}
        <WelcomeSection />

        {/* Vertical Circulars Ticker & Leadership Messages */}
        <NewsAndMessages />

        {/* Updated News 3-Column Grid */}
        <UpdatedNewsGrid />

        {/* Explore MIIS Social Showcase with Parallax Background */}
        <ExploreFeed onSelectPost={(post) => setSelectedSocialPost(post)} />

        {/* Accreditations: Parents Speak & Alumni Speak */}
        <Accreditations />

        {/* Continuous Campus Gallery Slider */}
        <CampusGallery onImageClick={handleGalleryClick} />
      </main>

      {/* Multi-Column Footer with Sister Organisations & Contact */}
      <Footer onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Right Floating Widgets (WhatsApp & Elevated Admission Trigger) */}
      <FloatingWidgets onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Interactive Modals */}
      <AdmissionModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <SocialMediaModal
        post={selectedSocialPost}
        onClose={() => setSelectedSocialPost(null)}
      />

      <NoticeBannerModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />
    </div>
  );
};

export default App;
