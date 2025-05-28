import React from "react";
import MagicButton from "../ui/MagicButton";
import { Navigation } from "lucide-react";
import IconButton from "../ui/IconButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Contact = () => {
  const mediaSocials = [
    { id: 1, link: "https://wa.me/6285270421768", icon: <IconBrandWhatsapp /> },
    {
      id: 2,
      link: "https://www.linkedin.com/in/prasanti-hikmatullisan-19215418a/",
      icon: <IconBrandLinkedin />,
    },
    // { id: 3, link: "", icon: <IconBrandGithub /> },
  ];

  return (
    <section
      id="contact"
      className="p-8 flex flex-col items-center justify-center gap-8 min-h-screen bg-radial-[at_100%] from-white via-background/25  to-transparent to-100%"
    >
      <h1 className="text-h2 font-bold text-center  lg:max-w-[40vw]">
        Want to be <span className="text-primary">connected</span> with me?
      </h1>
      <a href="mailto:prasantihikmatullisan@gmail.com">
        <MagicButton
          label="Get in touch"
          icon={<Navigation width={16} />}
          iconPosition="right"
        />
      </a>
      <div className="flex flex-row justify-between gap-4 text-primary">
        {mediaSocials.map(({ link, icon }, i) => (
          <a href={link} target="_blank" key={i}>
            <IconButton
              icon={icon}
              className="bg-background"
              // className="w-[48px] h-[48px]"
            />
          </a>
        ))}
      </div>
      <div className="bottom-0 absolute border  border-transparent border-t-primary bg-primary w-full py-2 px-2">
        <p className="text-center text-background">
          Copyright &copy; 2025 Prasanti <br className="md:hidden" />| Created
          using Vite.js & Tailwind 4
        </p>
      </div>
    </section>
  );
};

export default Contact;
