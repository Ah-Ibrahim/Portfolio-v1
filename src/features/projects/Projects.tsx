import Accordion from "@/components/common/Accordion";
import ProjectsData from "@/data/projects.json";
import { ProjectSchema, type ProjectType } from "@/lib/schemas/definitions";
import z from "zod";

let projects: ProjectType[];

try {
  projects = z.array(ProjectSchema).parse(ProjectsData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  projects = [];
}

function Projects() {
  return (
    <section className="bg-bg-primary pt-4 pb-10 selection:text-white selection:bg-black">
      <Accordion panelsData={projects} />
    </section>
  );
}
export default Projects;
