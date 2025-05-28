import React from "react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/data";

const Projects = () => {
  return (
    <section className="flex flex-col gap-8 pt-20 px-8" id="projects">
      <SectionTitle title="Recent" purpleTitle="Projects" />

      <div className="grid grid-col-1 md:grid-cols-2 gap-3">
        {projects.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
