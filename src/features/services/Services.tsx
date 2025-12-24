import servicesData from "@/data/services.json";
import useGSAPScrub from "@/hooks/useGSAPScrub";
import useMediaQuery from "@/hooks/useMediaQuery";
import screenBreakpoints from "@/lib/breakpoints";
import { ServiceSchema, type ServiceType } from "@/lib/schemas/definitions";
import React, { Suspense, useRef } from "react";
import { useInView } from "react-intersection-observer";
import z from "zod";
const Accordion = React.lazy(() => import("@/components/common/Accordion"));
const Table = React.lazy(() => import("./Table"));

let services: ServiceType[];

try {
  services = z.array(ServiceSchema).parse(servicesData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  services = [];
}

function Services() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const isXl = useMediaQuery(`(min-width:${screenBreakpoints.xl})`);

  const scrubContainer = useRef<HTMLDivElement>(null);
  const scrubElement = useRef<HTMLHeadingElement>(null);

  useGSAPScrub<HTMLHeadingElement, HTMLDivElement>(
    scrubElement,
    scrubContainer
  );

  return (
    <section
      className="py-10 md:py-16 bg-bg-primary selection:text-white selection:bg-black"
      id="services"
      ref={ref}
    >
      <div
        className="flex justify-between section-padding mb-10 uppercase font-bold-condensed tracking-tighter overflow-hidden"
        ref={scrubContainer}
      >
        <h2
          className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl tracking-tighter leading-none"
          ref={scrubElement}
        >
          Services
        </h2>
        <div className="text-sm md:text-base lg:text-lg xl:text-2xl">
          DSGN/4
        </div>
      </div>
      <Suspense
        fallback={
          <div className="px-4 md:px-6 text-3xl font-bold-condensed uppercase tracking-tighter md:text-4xl lg:md:text-5xl">
            loading...
          </div>
        }
      >
        {inView &&
          (isXl ? (
            <Table panelsData={services} />
          ) : (
            <Accordion panelsData={services} />
          ))}
      </Suspense>
    </section>
  );
}
export default Services;
