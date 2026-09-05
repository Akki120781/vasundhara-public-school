export interface SchoolProgram {
  id: string;
  name: string;
  subtitle: string;
  ageGroup: string;
  iconBg: string;
  image: string;
  description: string;
  link: string;
}

export const schoolPrograms: SchoolProgram[] = [
  {
    id: "pre-primary",
    name: "Kindergarten",
    subtitle: "(Nursery to UKG)",
    ageGroup: "3-5 years",
    iconBg: "#e8f5e9",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    description: "Play-based inquiry curriculum fostering early literacy, sensory skills, and creative joy.",
    link: "#admission",
  },
  {
    id: "primary",
    name: "Primary Wing",
    subtitle: "(Classes I to V)",
    ageGroup: "6-10 years",
    iconBg: "#e3f2fd",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80",
    description: "Foundational conceptual clarity in Mathematics, Science, Environmental Studies, and Languages.",
    link: "#admission",
  },
  {
    id: "middle",
    name: "Upper Primary",
    subtitle: "(Classes VI to VIII)",
    ageGroup: "11-13 years",
    iconBg: "#fff8e1",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    description: "Deepened subject learning, science experimentation, sportsmanship, and value-based education.",
    link: "#admission",
  },
  {
    id: "secondary",
    name: "Secondary",
    subtitle: "(Classes IX & X)",
    ageGroup: "14-15 years",
    iconBg: "#fbe9e7",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
    description: "Comprehensive board examination syllabus preparation, practical lab work, and disciplined mentoring.",
    link: "#admission",
  },
  {
    id: "higher-secondary",
    name: "Higher Secondary",
    subtitle: "(Classes XI & XII)",
    ageGroup: "16-17 years",
    iconBg: "#f3e5f5",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
    description: "Specialized academic streams (Science, Commerce, Arts) preparing students for competitive success.",
    link: "#admission",
  },
];
