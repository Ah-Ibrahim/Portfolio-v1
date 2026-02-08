import ProjectsData from "@/shared/data/projects.json";
import {
  ProjectSchema,
  type ProjectType,
} from "@/shared/lib/schemas/definitions";
import z from "zod";
import ProjectsContent from "./ProjectsContent";

let projects: ProjectType[];

try {
  projects = z.array(ProjectSchema).parse(ProjectsData);
} catch (error) {
  console.error("Failed to parse recentProjects.json", error);
  projects = [];
}

function Projects() {
  return <ProjectsContent projects={projects} />;
}
export default Projects;
