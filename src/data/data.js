import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

export const skills = [
  { id: 1, img: "/profile/skills/flutter.svg", name: "Flutter" },
  { id: 2, img: "/profile/skills/get.svg", name: "Get" },
  { id: 3, img: "/profile/skills/bloc.svg", name: "BLoC" },
  { id: 4, img: "/profile/skills/react.svg", name: "React" },
  { id: 5, img: "/profile/skills/vite.svg", name: "Vite" },
  { id: 6, img: "/profile/skills/tailwind.svg", name: "Tailwind" },
  { id: 7, img: "/profile/skills/firebase.svg", name: "Firebase" },
  { id: 8, img: "/profile/skills/git.svg", name: "Git" },
  // { id: 6, img: "/skills/next-js.svg", name: "Next.Js" },
];

export const projects = [
  { id: 1, title: "Bukuku Personal", description: "Meet your personal accountant. Cross-platform application that can be access in Android and IoS. User can download tax report with all incomes and outcomes calculation. Made using Flutter with API Rest Integration.", skills: [0, 1, 6, 7], img: "/profile/projects/projects-1.png" },
  { id: 2, title: "Dynavolt", description: "Claim and Exchange your point to get amazing souvenirs. Made using Flutter with API Rest Integration.", skills: [0, 1, 6, 7], img: "/profile/projects/projects-2.png" },
  { id: 3, title: "Chatdoc", description: "Converse with your favorite doctor. Made using Flutter with Firebase Realtime database supporting the chat feature.", skills: [0, 2, 6, 7], img: "/profile/projects/projects-3.png" },
  { id: 4, title: "My Portfolio", description: "This Portfolio Page. Used Vite and Tailwind to support the responsive view.", skills: [3, 4, 5, 7], img: "/profile/projects/projects-4.png", liveUrl: "https://prasantii.github.io/profile" },
  ...[5, 6, 7, 8].map((id) => ({
    id,
    title: `Sample Project ${String(id).padStart(2, "0")}`,
    description: "Placeholder entry. Replace this with a short overview of the project, your role, and its impact.",
    skills: [],
    isPlaceholder: true,
  })),
];

export const experiences = [
  {
    id: 4,
    position: "Software Engineer (Web)",
    company: "PT Rumah Pertanian",
    date: "Jun 2026 - Aug 2026",
    description: [
      "Developed responsive web applications using Next.js (React) with Prisma ORM for efficient relational database interactions.",
      "Converted Figma UI/UX designs into modular, reusable React frontend components.",
      "Implemented optimized server-side data fetching strategies and RESTful API endpoints to improve application load speed.",
    ],
  },
  {
    id: 3,
    position: "Flutter Developer (Part-time)",
    company: "Bravonet Solutions",
    date: "2025 Aug - 2025 Nov",
    description: [
      "Assisted with building a chat application and refining its user experience.",
      "Optimized app performance and helped investigate issues affecting responsiveness.",
      "Reviewed implemented features against product requirements and supported quality checks.",
    ],
  },
  {
    id: 1, position: "Senior Frontend Developer", company: "PT. Bukuku Solusi Kreatif", location: "West Java, Indonesia", date: "2022 Dec - 2025 Apr", description: ["Reviewed and analyzed 20+ UI/UX design specifications to reduce 15% design-related implementation issues.",
      "Developed and implemented cross-platform applications (Android, iOS, and Web) using Flutter and GetX, reducing development time by 30% through code reusability.",
      "Actively collaborated with UI/UX designers and backend developers to deliver high-quality applications.",
      "Integrated RESTful APIs to improve data synchronization and reduce manual input by 40%.",
      "Implemented code with clean architecture to reduce duplicate code up to 50%."]
  },
  {
    id: 2, position: "Freelancer", company: "RIMS | Software House", location: "Banda Aceh, Indonesia", date: "2020 Nov - 2022 Sep", description: [
      "Developed application UI using Flutter and GetX that support the client’s needs",
      "Collaborated closely with other IT Teams (such as Backend developer and infrastructure team) to support the applications production."
    ]
  }
];

export const services = [
  { id: 1, title: "Mobile Development", description: "Creating your Android or cross-platform application", img: "/profile/skills/react.svg" },
  { id: 2, title: "Web Development", description: "Delivering a responsive website for all screen sizes", img: "/profile/skills/react.svg" },
  { id: 3, title: "Integration & Optimization", description: "API integration and error handling with UI/UX Improvements", img: "/profile/skills/react.svg" },
];
