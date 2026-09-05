export interface Announcement {
  id: string;
  title: string;
  snippet: string;
  link: string;
  badge?: string;
  date?: string;
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Admissions Open for Session 2025-26",
    snippet: "Registrations are now open from Nursery to Class XII. Experience high-quality co-educational schooling, state-of-the-art 28 classrooms, and bus transport.",
    link: "#enquiry-modal",
    badge: "Admissions",
    date: "Session 2025-26",
  },
  {
    id: "2",
    title: "Annual Sports Meet & Bal Mela 2025",
    snippet: "Vasundhara Public School, Punjapura celebrated its grand sports meet featuring track events, kabaddi, volleyball, and cultural performances.",
    link: "#events",
    badge: "Highlights",
    date: "Annual Event",
  },
  {
    id: "3",
    title: "Board Examination Schedule & Model Papers",
    snippet: "Model papers, revision timetables, and teacher counseling schedules released for Class X and XII board examinees.",
    link: "#academics",
    badge: "Academic",
    date: "Term 2025-26",
  },
  {
    id: "4",
    title: "New School Bus Transport Routes Announced",
    snippet: "Dedicated transport vehicles covering Punjapura, Bagli, and surrounding rural routes now active for safe student commuting.",
    link: "#facilities",
    badge: "Transport",
    date: "Route Update",
  },
  {
    id: "5",
    title: "Science & Art Innovation Exhibition",
    snippet: "Young scientists of VPS demonstrated creative working models and craft installations, earning high praise from visiting educators.",
    link: "#gallery",
    badge: "Exhibition",
    date: "Campus Life",
  },
];
