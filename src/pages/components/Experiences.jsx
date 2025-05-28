import React from "react";
import SectionTitle from "../ui/SectionTitle";
import AnimatedText from "../ui/TextGenerateEffect";
import { experiences } from "../../data/data";
import { CalendarDays } from "lucide-react";
import Timeline from "../ui/Timeline";
import { useInView } from "../../../lib/utils";
import TextGenerateEffect from "../ui/TextGenerateEffect";

const Experiences = () => {
  const [ref, inView] = useInView();

  const tagLine = "More than 3 years experience building application";
  return (
    <section id="experiences" className="flex flex-col pt-20  px-8 gap-3">
      <SectionTitle title="Working" purpleTitle="Experiences" />
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="flex flex-col">
          <TextGenerateEffect
            words={tagLine}
            highlightWordIndex={[2, 3, 4]}
            className="justify-center md:justify-start text-h5"
          />
          <p className="text-title-2 md:text-h5 font-semibold">
            Specializing in Mobile Development
          </p>
        </div>
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
