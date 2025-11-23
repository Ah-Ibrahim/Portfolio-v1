import Projects from "@/components/Projects";
import ProjectsData from "@/data/recentProjects.json" with { type: "json" };
import { type ProjectType, ProjectSchema } from "@/lib/schemas/definitions";
import z from "zod";

let projects: ProjectType[];

try {
  projects = z.array(ProjectSchema).parse(ProjectsData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
}

function ProjectsContainer() {
  return <Projects projects={projects} />;
}
export default ProjectsContainer;
