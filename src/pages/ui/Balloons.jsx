import React, { useEffect, useState } from "react";
import { skills } from "../../data/data";

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);
  useEffect(() => {
    generateBalloons();
  }, []);

  const generateBalloons = () => {
    const numberOfBalloons = Math.floor(Math.random() * 10 + 5);

    const newBalloons = [];
    for (let i = 0; i < numberOfBalloons; i++) {
      console.log(
        "(" + numberOfBalloons + ")DATA " + i + " : " + Math.random() * 100
      );
      newBalloons.push({
        id: i,
        img: skills[Math.floor(Math.random() * skills.length)].img,
        size: (Math.random() * 10 + 1) * 8,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setBalloons(newBalloons);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map(({ id, img, size, x, y, animationDuration }) => (
        <div
          key={id}
          className={`rounded-full absolute border border-primary  p-2 bg-secondary/25 animate-moving-around`}
          style={{
            width: size + "px",
            height: size + "px",
            left: x + "%",
            top: y + "%",
            animationDuration: animationDuration,
          }}
        >
          {<img src={img} alt={img} />}
        </div>
      ))}
      <div className=" w-full h-full  backdrop-blur-xs z-1"></div>
    </div>
  );
};

export default Balloons;
