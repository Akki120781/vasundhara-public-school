export interface SocialPost {
  id: string;
  author: string;
  timestamp: string;
  tag: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  postUrl: string;
}

export const socialFeedPosts: SocialPost[] = [
  {
    id: "post-1",
    author: "Vasundhara Public School",
    timestamp: "1 day ago",
    tag: "Cultural Celebrations • Foundational Wing",
    caption: "🦚✨ Celebrating Cultural Vibrance & Festivals! ✨🦚 Students and teachers of Vasundhara Public School, Punjapura celebrated cultural festivities with great enthusiasm, traditional costumes, melodious songs, and joyful activities in the school hall.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
    likes: 38,
    comments: 4,
    postUrl: "https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET",
  },
  {
    id: "post-2",
    author: "Vasundhara Public School",
    timestamp: "3 days ago",
    tag: "Academic Excellence • Science & Innovation",
    caption: "🔬 Science & Environmental Craft Exhibition! VPS students created innovative working models on solar power, water harvesting, and science experiments across our 28 classrooms. Parents appreciated the children's hard work.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    likes: 45,
    comments: 7,
    postUrl: "https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET",
  },
  {
    id: "post-3",
    author: "Vasundhara Public School",
    timestamp: "5 days ago",
    tag: "Sports Glory • Annual Athletics Meet",
    caption: "⚽ Annual Sports Day in Punjapura! Our 670 students participated with high spirits in relay races, kabaddi, volleyball, and physical training drills. Heartiest congratulations to all medal winners!",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80",
    likes: 52,
    comments: 9,
    postUrl: "https://www.justdial.com/Dewas/Vasundhara-Public-School-Punjapura/9999P7272-7272-170608153633-M2Y1_BZDET",
  },
];
