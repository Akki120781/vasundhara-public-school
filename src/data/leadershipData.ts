export interface LeadershipMessage {
  id: string;
  role: string;
  name: string;
  title: string;
  image: string;
  objectPosition?: string;
  excerpt: string;
  link: string;
}

export const leadershipMessages: LeadershipMessage[] = [
  {
    id: "chairman",
    role: "Chairman's Message",
    name: "Patron & Chairman",
    title: "Chairman, Vasundhara Educational Trust",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    objectPosition: "center top",
    excerpt: "At Vasundhara Public School, Punjapura, our mission is to empower rural and semi-urban learners with quality schooling, ethical values, and bright career pathways.",
    link: "#messages",
  },
  {
    id: "director",
    role: "Director's Message",
    name: "Managing Director",
    title: "Director, Vasundhara Public School",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    objectPosition: "center 15%",
    excerpt: "We believe in holistic growth where classroom learning is complemented by sports, culture, and creative skills, preparing students for tomorrow's challenges.",
    link: "#messages",
  },
  {
    id: "principal",
    role: "Principal's Desk",
    name: "Principal's Message",
    title: "Principal, Vasundhara Public School, Dewas",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=80",
    objectPosition: "center 15%",
    excerpt: "Our 24 dedicated teachers foster an atmosphere of curiosity, mutual respect, and disciplined study so every child reaches their fullest academic potential.",
    link: "#messages",
  },
];
