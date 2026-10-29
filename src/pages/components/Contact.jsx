import React from "react";
import MagicButton from "../ui/MagicButton";
import { Navigation } from "lucide-react";
import IconButton from "../ui/IconButton";
import Reveal from "../ui/Reveal";
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
      className="relative p-8 flex flex-col items-center justify-center gap-8 min-h-screen bg-radial-[at_50%] from-center-radial via-background/25  to-transparent to-100%"
    >
      <Reveal className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-h2 font-bold text-center  lg:max-w-[40vw]">
            Interested in{" "}
            <span className="text-primary">working together?</span>
          </h2>
          <p className="text-title-2 md:text-title-1 font-semibold">
            Let&apos;s turn ideas into experiences!
          </p>
        </div>
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
      </Reveal>
      <div className="bottom-0 absolute border  border-transparent border-t-primary bg-primary w-full py-2 px-2">
        <p className="text-center text-background text-caption">
          Copyright &copy; 2025 Prasanti <br className="md:hidden" />| Created
          using ReactJs, Vite.js & Tailwind 4
        </p>
      </div>
    </section>
  );
};

export default Contact;
