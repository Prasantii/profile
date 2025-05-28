import React from "react";
import IconButton from "./IconButton";
import { skills } from "../../data/data";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full bg-cream-2/30 border border-cream backdrop-blur-sm rounded-xl p-4 items-center">
      <img
        src={data.img}
        alt={data.title}
        className="w-[45vw] lg:w-[20vw] md:h-[10vw] h-[100px] fit object-cover"
      />
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col">
          <h1 className="text-title-1 text-center md:text-start md:text-h4 font-bold">
            {data.title}
          </h1>
          <p className="text-title-1 text-center md:text-start md:text-h5">
            {data.description}
          </p>
        </div>
        <div className="flex flex-row justify-end w-full">
          {data &&
            data.skills.map((sIdx, i) => (
              <IconButton
                key={i}
                icon={<img src={skills[sIdx].img} alt={skills[0].name} />}
                className={`rounded-full w-8 h-8 bg-secondary/50 backdrop-blur-3xl`}
                style={{
                  transform: `translateX(${
                    5 * (data.skills.length - i - 1) + 2
                  }px)`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
