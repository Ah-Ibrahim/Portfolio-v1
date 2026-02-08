"use clients";

import AccordionSkeleton from "@/shared/components/common/Accordion/AccordionSkeleton";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import screenBreakpoints from "@/shared/lib/breakpoints";
import { useInView } from "react-intersection-observer";
import Scrub from "./Scrub";
import TableSkeleton from "./Table/TableSkeleton";
import { ServiceType } from "@/shared/lib/schemas/definitions";
import dynamic from "next/dynamic";

const Table = dynamic(() => import("./Table/Table"));

function ServicesContent({ services }: { services: ServiceType[] }) {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const Accordion = dynamic(
    () => import("@/shared/components/common/Accordion/Accordion"),
    { loading: () => <AccordionSkeleton count={services.length} /> },
  );

  const isXl = useMediaQuery(`(min-width:${screenBreakpoints.xl})`);

  return (
    <section
      className="py-10 md:py-16 bg-bg-primary selection:text-white selection:bg-black"
      id="services"
      ref={ref}
    >
      <Scrub />
      {isXl ? (
        inView ? (
          <Table panelsData={services} />
        ) : (
          <TableSkeleton />
        )
      ) : inView ? (
        <Accordion panelsData={services} />
      ) : (
        <AccordionSkeleton count={services.length} />
      )}
    </section>
  );
}
export default ServicesContent;
