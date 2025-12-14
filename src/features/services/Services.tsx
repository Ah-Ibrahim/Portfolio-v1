import Accordion from "@/components/common/Accordion";
import servicesData from "@/data/services.json";
import useMediaQuery from "@/hooks/useMediaQuery";
import screenBreakpoints from "@/lib/breakpoints";
import { ServiceSchema, type ServiceType } from "@/lib/schemas/definitions";
import z from "zod";
import Table from "./Table";

let services: ServiceType[];

try {
  services = z.array(ServiceSchema).parse(servicesData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  services = [];
}

function Services() {
  const isLg = useMediaQuery(`(min-width:${screenBreakpoints.lg})`);

  return (
    <section
      className="py-10 md:py-16 bg-bg-primary selection:text-white selection:bg-black"
      id="services"
    >
      <div className="flex justify-between section-padding mb-10 uppercase font-bold-condensed tracking-tighter">
        <h2 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl tracking-tighter">
          Services
        </h2>
        <div className="text-sm md:text-base lg:text-lg xl:text-2xl">
          DSGN/4
        </div>
      </div>
      {isLg ? (
        <Table panelsData={services} />
      ) : (
        <Accordion panelsData={services} />
      )}
    </section>
  );
}
export default Services;
