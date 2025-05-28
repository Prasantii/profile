import React from "react";
import { GlowingEffect } from "./GlowingEffect";

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-primary md:rounded-3xl">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={6}
        />
        <div className="border-[75%] relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-secondary/30">
          <div className="relative flex flex-1 flex-col items-center justify-between gap-3">
            <div className="w-fit rounded-lg  p-2">{icon}</div>
            <div className="space-y-3 text-center">
              <h3 className="-tracking-4 pt-0.5 text-title-1 font-semibold text-balance text-foreground md:text-h3">
                {title}
              </h3>
              <h2 className="text-body md:text-h5  [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
