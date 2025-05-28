import { CalendarDays } from "lucide-react";
import React from "react";

const Timeline = ({ experiences }) => {
  return (
    <div className="flex flex-col">
      {experiences.map(
        ({ id, position, company, location, date, description }, i) => (
          <div
            key={i}
            className={`
        flex gap-4 relative opacity-0 translate-y-4
        animate-fade-in-up
      `}
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {/* Timeline Indicator */}
            <div className="flex flex-col items-center relative">
              {/* Titik */}
              <div className="w-4 h-4 rounded-full bg-primary z-10" />

              {/* Garis (hanya tampil jika bukan item terakhir) */}
              {i !== experiences.length - 1 && (
                <div
                  className="w-1 flex-grow bg-primary animate-grow-line"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              )}
            </div>

            {/* Konten */}
            <div className="mb-6 bg-background/90 p-2 rounded-xl border border-primary">
              <h1 className="text-h5 md:text-h4 font-bold">{position}</h1>
              <p className="text-title-1 md:text-h5 font-bold text-primary">
                {company} <br className="lg:hidden" />
                <span className="text-body">{location}</span>
              </p>
              <div className="flex items-center gap-2">
                <CalendarDays height={16} width={16} />
                <p className="text-title-2 font-bold">{date}</p>
              </div>
              <ul className="list-disc pl-4">
                {description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Timeline;
