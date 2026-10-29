import { ArrowUpRight } from "lucide-react";
import { skills } from "../../data/data";

const Card = ({ data, onSelect }) => {
  const projectSkills = data.skills
    .map((skillIndex) => skills[skillIndex])
    .filter(Boolean);

  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-white/80 bg-white/40 text-left shadow-[0_12px_36px_rgba(91,75,145,0.12)] ring-1 ring-primary/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/25 hover:bg-white/55 hover:shadow-[0_18px_44px_rgba(91,75,145,0.18)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl">
        {data.img ? (
          <img
            src={data.img}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <div
            className="flex h-full items-end justify-between border-b border-foreground/10 px-5 py-4 text-primary/55"
            aria-hidden="true"
          >
            <span className="text-7xl font-bold">
              {String(data.id).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold text-foreground/50">
              No Preview Available
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-xl font-bold text-foreground">{data.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/70">
          {data.description}
        </p>
        {data.isPlaceholder ? (
          <span className="mt-5 w-fit border-b border-primary/40 pb-1 text-xs font-semibold uppercase text-primary">
            Sample placeholder
          </span>
        ) : (
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {projectSkills.map((skill) => (
              <li
                key={skill.id}
                className="rounded-md bg-secondary/20 px-2.5 py-1.5 text-xs font-semibold text-foreground/75"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        onClick={() => onSelect(data)}
        aria-haspopup="dialog"
        aria-label={`View project details: ${data.title}`}
        className="absolute inset-0 z-10 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-3 py-2 text-sm font-semibold text-foreground shadow-sm">
          View details <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </button>
    </article>
  );
};

export default Card;
