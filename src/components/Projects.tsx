import Accordion from "@/components/Accordion";
import ProjectsData from "@/data/projects.json";
import { ProjectSchema, type ProjectType } from "@/lib/schemas/definitions";
import z from "zod";

let projects: ProjectType[];

try {
  projects = z.array(ProjectSchema).parse(ProjectsData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
}

function Projects() {
  return (
    <section className="bg-bg-primary pt-12">
      <Accordion panelsData={projects} />
    </section>
  );
}
export default Projects;
