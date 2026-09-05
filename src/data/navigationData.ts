export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    subChildren?: {
      title: string;
      href: string;
    }[];
  }[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About Us",
    href: "#about",
    children: [
      { title: "Our Vision & Mission", href: "#about" },
      { title: "Chairman's Message", href: "#messages" },
      { title: "Director's Message", href: "#messages" },
      { title: "Principal's Desk", href: "#messages" },
      { title: "Campus Infrastructure (28 Classrooms)", href: "#facilities" },
      { title: "Why Choose VPS Punjapura", href: "#about" },
    ],
  },
  {
    title: "Academics",
    href: "#programs",
    children: [
      { title: "Kindergarten (Nursery, LKG, UKG)", href: "#programs" },
      { title: "Primary Wing (Classes I to V)", href: "#programs" },
      { title: "Upper Primary / Middle (Classes VI to VIII)", href: "#programs" },
      { title: "Secondary School (Classes IX & X)", href: "#programs" },
      { title: "Higher Secondary (Classes XI & XII)", href: "#programs" },
      { title: "Curriculum & Syllabus (CBSE & MP Board)", href: "#programs" },
      { title: "Academic Results & Achievements", href: "#news" },
      { title: "Dedicated Faculty & Staff", href: "#messages" },
    ],
  },
  {
    title: "School Calendar",
    href: "#calendar",
  },
  {
    title: "Admission",
    href: "#admission",
    children: [
      { title: "Admission Criteria & Guidelines", href: "#admission" },
      { title: "Fee Structure (2025-26)", href: "#fee-structure" },
      { title: "School Transport & Bus Routes", href: "#transport" },
      { title: "Online Admission Enquiry Form", href: "#enquiry-modal" },
    ],
  },
  {
    title: "Facilities",
    href: "#facilities",
    children: [
      { title: "28 Spacious Classrooms", href: "#facilities" },
      { title: "Library & Resource Center", href: "#facilities" },
      { title: "Sports Playground & Physical Ed", href: "#facilities" },
      { title: "3 School Transport Buses", href: "#facilities" },
      { title: "Computer & Science Learning", href: "#facilities" },
    ],
  },
  {
    title: "Mandatory Disclosure",
    href: "#disclosure",
  },
  {
    title: "Gallery",
    href: "#gallery",
  },
  {
    title: "Contact Us",
    href: "#contact",
  },
];
