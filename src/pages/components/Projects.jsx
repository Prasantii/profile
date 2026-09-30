import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { projects, skills } from "../../data/data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedProject && !dialog.open) dialog.showModal();
    if (!selectedProject && dialog.open) dialog.close();
  }, [selectedProject]);

  const selectedSkills = selectedProject
    ? selectedProject.skills
        .map((skillIndex) => skills[skillIndex])
        .filter(Boolean)
    : [];

  return (
    <section
      className="px-6 py-20 md:px-10 md:py-24  border-y border-primary/10 bg-secondary/15"
      id="projects"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Selected" purpleTitle="Projects" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-foreground/70">
          A few products I&apos;ve helped bring to life, from cross-platform
          tools to customer-focused mobile experiences.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} data={p} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[min(calc(100%-2rem),56rem)] overflow-y-auto rounded-lg border border-primary/20 bg-background p-0 text-foreground shadow-2xl backdrop:bg-foreground/55 backdrop:backdrop-blur-sm"
      >
        {selectedProject && (
          <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
            {selectedProject.img ? (
              <img
                src={selectedProject.img}
                alt={`${selectedProject.title} project preview`}
                className="aspect-[16/10] h-full w-full object-cover md:aspect-auto"
              />
            ) : (
              <div className="grid min-h-40 place-items-center border-b border-foreground/10 text-6xl font-bold text-primary/40 md:min-h-full md:border-b-0 md:border-r">
                {String(selectedProject.id).padStart(2, "0")}
              </div>
            )}
            <div className="p-6 md:p-8">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close project details"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-white/95 text-foreground shadow-sm transition-colors hover:bg-secondary/40 focus-visible:outline-2 focus-visible:outline-primary md:right-5 md:top-5"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <p className="text-sm font-semibold uppercase text-primary">
                {selectedProject.isPlaceholder
                  ? "Sample placeholder"
                  : "Project details"}
              </p>
              <h3
                id="project-dialog-title"
                className="mt-2 pr-10 text-2xl font-bold md:text-3xl"
              >
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
                {selectedProject.description}
              </p>
              {selectedSkills.length > 0 && (
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {selectedSkills.map((skill) => (
                    <li
                      key={skill.id}
                      className="rounded-md bg-secondary/25 px-3 py-2 text-sm font-semibold"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Live project <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-primary/25 px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    GitHub <Github size={16} aria-hidden="true" />
                  </a>
                )}
                {!selectedProject.liveUrl && !selectedProject.githubUrl && (
                  <p className="text-sm text-foreground/60">
                    {selectedProject.isPlaceholder
                      ? "Replace this sample with the project details and links."
                      : "No public demo or repository link is listed for this project."}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default Projects;
