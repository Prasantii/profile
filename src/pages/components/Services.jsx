import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/data";
import { WobbleCard } from "../ui/WobbleCard";

const Services = () => {
  return (
    <section id="services" className="flex flex-col pt-20 px-8 gap-8">
      <SectionTitle title="What can I" purpleTitle="offer to You" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-[80%] mx-auto">
        {services.map(({ id, title, description, img }, i) => (
          <WobbleCard key={i}>
            <div className="flex flex-col gap-2 md:gap-4 items-center">
              <img src={img} alt={title} />
              <h3 className="text-title-1 md:text-h4 lg:text-h3 font-bold text-center">
                {title}
              </h3>
              <p className="text-body md:text-title-1 text-center">
                {description}
              </p>
            </div>
          </WobbleCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
