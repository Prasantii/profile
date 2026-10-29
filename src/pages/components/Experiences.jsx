import SectionTitle from "../ui/SectionTitle";
import { experiences } from "../../data/data";
import Timeline from "../ui/Timeline";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import Reveal from "../ui/Reveal";

const Experiences = () => {
  const tagLine = "5 years Experience in Software Engineering";
  const techStack = [
    "Flutter",
    "GetX",
    "BLoC",
    "React",
    "Next.js",
    "Prisma ORM",
    "REST APIs",
    "Firebase",
    "Vite",
    "Tailwind CSS",
    "Git",
  ];
  return (
    <section id="experiences" className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Working" purpleTitle="Experiences" />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal className="flex flex-col gap-4 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase text-primary">
              Experience &amp; focus
            </p>
            <TextGenerateEffect
              words={tagLine}
              highlightWordIndex={[0, 4, 5]}
              className="text-2xl font-bold leading-snug text-foreground md:text-3xl"
            />
            <p className="max-w-md text-base leading-relaxed text-foreground/70">
              I build cross-platform mobile apps with Flutter and bring that
              same focus on performance and thoughtful user experiences to the
              web.
            </p>
            <div className="pt-1">
              <p className="mb-3 text-xs font-semibold uppercase text-foreground/55">
                Technology stack
              </p>
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Technology stack"
              >
                {techStack.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-primary/20 bg-secondary/20 px-3 py-2 text-sm font-semibold text-foreground/75"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Timeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
