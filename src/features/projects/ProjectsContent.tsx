"use client";

import AccordionSkeleton from "@/shared/components/common/Accordion/AccordionSkeleton";
import { ProjectType } from "@/shared/lib/schemas/definitions";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";
const Accordion = dynamic(
  () => import("@/shared/components/common/Accordion/Accordion"),
);

function ProjectsContent({ projects }: { projects: ProjectType[] }) {
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

export default ProjectsContent;
