import { type ProjectType } from "@/lib/schemas/definitions";
import { useState } from "react";

function Projects({ projects }: { projects: ProjectType[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    if (selectedId === id) setSelectedId(null);
    else setSelectedId(id);
  };

  const items = projects.map((project, index) => (
    <div
      key={project.id}
      className={`border-b border-dark-gray px-4 space-y-6 py-2 ${
        selectedId === project.id ? "bg-white" : ""
      }`}
    >
      <div className="flex items-center space-x-4 cursor-pointer ">
        {!(selectedId === project.id) && (
          <span className="text-secondary text-sm tracking-tighter">
            00-{index + 1}
          </span>
        )}
        <h2
          className="text-3xl font-bold-condensed uppercase tracking-tighter"
          onClick={() => handleClick(project.id)}
        >
          {project.title}
        </h2>
      </div>
      {selectedId === project.id && (
        <>
          <div className="flex *:flex-1">
            <figure>
              <img src={project.imageLink} alt="" />
            </figure>
          </div>
          <div className="text-center underline">
            <a
              href={project.previewLink}
              className="uppercase"
              style={{ color: project.colorTheme }}
            >
              Preview
            </a>
          </div>
          <p className="text-center uppercase font-light mb-4">
            {project.description}
          </p>
        </>
      )}
    </div>
  ));

  return (
    <section className="bg-bg-primary pt-12">
      <div className="flex flex-col">{items}</div>
    </section>
  );
}
export default Projects;
