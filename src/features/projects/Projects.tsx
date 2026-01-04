import AccordionSkeleton from "@/components/common/AccordionSkeleton";
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
      <Suspense fallback={<AccordionSkeleton count={projects.length} />}>
        {inView ? (
          <Accordion panelsData={projects} />
        ) : (
          <AccordionSkeleton count={projects.length} />
        )}
      </Suspense>
    </section>
  );
}
export default Projects;
