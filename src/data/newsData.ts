export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  excerpt: string;
  link: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "achievement",
    title: "School Achievement & Sports Honors",
    category: "Sports & Athletics",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=600&q=80",
    date: "Session 2025-26",
    excerpt: "District Level Athletics Triumph! A proud moment for Vasundhara Public School, Punjapura as our students clinched top honors and medals in sprint, kabaddi, and kho-kho at the Dewas district meet.",
    link: "#news",
  },
  {
    id: "media-coverage",
    title: "Excellence in Academic Board Results",
    category: "Academic Milestones",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    date: "Annual Honors",
    excerpt: "“Vasundhara Public School students achieve outstanding merit positions in board examinations.” Parents, local administration, and community leaders commended the school's teaching standards.",
    link: "#news",
  },
  {
    id: "parent-testimonial",
    title: "Vasundhara Public School Parent Feedback",
    category: "Community Voices",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
    date: "Community Trust",
    excerpt: "“The safe bus transport, experienced 24 faculty members, and positive learning environment in Punjapura give our children a great foundation for their future.” – Parent Feedback.",
    link: "#testimonials",
  },
];
