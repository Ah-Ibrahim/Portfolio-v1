"use client";

import AccordionSkeleton from "@/shared/components/common/Accordion/AccordionSkeleton";
import { ProjectType } from "@/shared/lib/schemas/definitions";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

function ProjectsContent({ projects }: { projects: ProjectType[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  const Accordion = dynamic(
    () => import("@/shared/components/common/Accordion/Accordion"),
    { loading: () => <AccordionSkeleton count={projects.length} /> },
  );

  return (
    <section
      ref={ref}
      className="bg-bg-primary pt-4 pb-10 selection:text-white selection:bg-black"
    >
      {inView ? (
        <Accordion panelsData={projects} />
      ) : (
        <AccordionSkeleton count={projects.length} />
      )}
    </section>
  );
}

export default ProjectsContent;
