import Accordion from "@/components/common/Accordion";
import servicesData from "@/data/services.json";
import { ServiceSchema, type ServiceType } from "@/lib/schemas/definitions";
import z from "zod";

let services: ServiceType[];

try {
  services = z.array(ServiceSchema).parse(servicesData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  services = [];
}

function Services() {
  return (
    <section className="py-10 bg-bg-primary">
      <div className="flex justify-between section-padding mb-10 uppercase font-bold-condensed tracking-tighter">
        <h2 className="text-5xl ">Services</h2>
        <div className="text-sm">DSGN/4</div>
      </div>
      <Accordion panelsData={services} />
    </section>
  );
}
export default Services;
