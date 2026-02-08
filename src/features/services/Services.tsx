"use client";

import z from "zod";
import {
  type ServiceType,
  ServiceSchema,
} from "@/shared/lib/schemas/definitions";
import servicesData from "@/shared/data/services.json";
import ServicesContent from "./ServicesContent";

let services: ServiceType[];

try {
  services = z.array(ServiceSchema).parse(servicesData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  services = [];
}

function Services() {
  return <ServicesContent services={services} />;
}
export default Services;
