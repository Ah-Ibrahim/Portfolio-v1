import ProjectsData from "@/data/projects.json";
import { ProjectSchema, type ProjectType } from "@/lib/schemas/definitions";
import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import z from "zod";
const Accordion = React.lazy(() => import("@/components/common/Accordion"));

let projects: ProjectType[];

try {
  projects = z.array(ProjectSchema).parse(ProjectsData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  projects = [];
}

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section
      ref={ref}
      className="bg-bg-primary pt-4 pb-10 selection:text-white selection:bg-black"
    >
      <Suspense
        fallback={
          <div className="px-4 md:px-6 text-3xl font-bold-condensed uppercase tracking-tighter md:text-4xl lg:md:text-5xl">
            loading...
          </div>
        }
      >
        {inView && <Accordion panelsData={projects} />}
      </Suspense>
    </section>
  );
}
export default Projects;
