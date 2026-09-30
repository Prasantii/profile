import { CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExperienceItem = ({ experience, index, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const { position, company, location, date, description } = experience;

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(item);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex gap-4 transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      <div className="relative flex w-8 shrink-0 flex-col items-center self-stretch">
        <div
          className={`z-10 grid h-8 w-8 place-items-center rounded-full border-2 bg-background transition-colors duration-500 ${
            isVisible ? "border-primary" : "border-primary/30"
          }`}
          aria-hidden="true"
        >
          <span
            className={`h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-500 ${
              isVisible ? "scale-100" : "scale-0"
            }`}
          />
        </div>
        {!isLast && (
          <div
            className="absolute -bottom-4 left-1/2 top-7 w-px -translate-x-1/2 bg-primary/25"
            aria-hidden="true"
          />
        )}
      </div>

      <article className="mb-4 min-w-0 flex-1 rounded-lg border border-primary/15 border-l-4 border-l-primary/60 bg-white/75 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-foreground md:text-xl">
              {position}
            </h3>
            <p className="mt-1 font-semibold text-primary">{company}</p>
            {location && (
              <p className="mt-1 text-sm text-foreground/60">{location}</p>
            )}
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-md bg-secondary/25 px-3 py-2 text-sm font-semibold text-foreground/75">
            <CalendarDays size={16} aria-hidden="true" />
            <span>{date}</span>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/75 md:text-base">
          {description.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

const Timeline = ({ experiences }) => {
  return (
    <div className="flex w-full flex-col">
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          index={index}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
