import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

export const skills = [
  { id: 1, img: "/skills/flutter.svg", name: "Flutter" },
  { id: 2, img: "/skills/get.svg", name: "Get" },
  { id: 3, img: "/skills/bloc.svg", name: "BLoC" },
  { id: 4, img: "/skills/react.svg", name: "React" },
  { id: 5, img: "/skills/firebase.svg", name: "Firebase" },
  { id: 6, img: "/skills/git.svg", name: "Git" },
  // { id: 6, img: "/skills/next-js.svg", name: "Next.Js" },
];

export const projects = [
  { id: 1, title: "Bukuku Personal", description: "Meet your personal accountant. Cross-platform application that can be access in Android and IoS", skills: [2, 3, 4, 5], img: "/projects/projects-1.png" },
  { id: 2, title: "Dynavolt", description: "Claim and Exchange your point to get amazing souvenirs. Android application", skills: [2, 3, 4, 5], img: "/projects/projects-2.png" },
  { id: 3, title: "Bukuku Personal", description: "Meet your personal accountant", skills: [2, 3, 4, 5], img: "/projects/projects-1.png" },
  { id: 4, title: "Bukuku Personal", description: "Meet your personal accountant", skills: [2, 3, 4, 5], img: "/projects/projects-2.png" },
];

export const experiences = [
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
  { id: 1, title: "Mobile Development", description: "Creating your Android or cross-platform application", img: "/skills/react.svg" },
  { id: 2, title: "Web Development", description: "Delivering a responsive website for all screen sizes", img: "/skills/react.svg" },
  { id: 3, title: "Integration & Optimization", description: "API integration and error handling with UI/UX Improvements", img: "/skills/react.svg" },
];
