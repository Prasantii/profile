import React from "react";
import SectionTitle from "../ui/SectionTitle";
import IconButton from "../ui/IconButton";
import { Twitter } from "lucide-react";
import { skills } from "../../data/data";

const About = () => {
  return (
    <section
      id="about"
      className="pt-16 flex flex-col items-center justify-center min-h-screen bg-radial-[at_100%] from-white via-background/25  to-transparent to-100%"
    >
      <div className="bg-primary rounded-2xl h-[4px] w-[60px] md:w-[128px]" />
      <div className="py-16 flex flex-col items-center justify-center gap-2.5">
        <h1 className="text-h5 md:text-h2 font-bold text-foreground text-center p-0 m-0">
          Hello, I&apos;m Prasanti Hikmatullisan
        </h1>
        <h1 className="text-title-1 md:text-h3 font-bold text-primary text-center p-0 m-0">
          Mobile & Frontend Developer
        </h1>
        <p className="px-8 lg:max-w-[60%] text-center  text-title-2 md:text-h5">
          I enjoy writing clean, testable code to ensure stability and
          scalability. By collaborating with other developers and designers,
          I&apos;m aiming to deliver high quality apps that meet both technical
          requirements and user needs.
        </p>
        <div className="flex flex-row gap-1.5 pt-2.5">
          {skills.map(({ id, img, name }) => (
            <IconButton
              key={id}
              icon={
                <img
                  key={id}
                  src={img}
                  alt={name}
                  className="h-[24px] md:h-[32px] w-[24px] md:w-[32px]"
                />
              }
            />
          ))}
        </div>
      </div>
      <div className="bg-primary rounded-2xl h-[4px] w-[60px] md:w-[128px]" />
      {/* <SectionTitle title="Prasanti" purpleTitle="Hikmatullisan" /> */}
    </section>
  );
};

export default About;
