import z from "zod";
import { nanoid } from "nanoid";

export const ProjectSchema = z
  .object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    imageLink: z.url(),
    previewLink: z.string(),
  })
  .transform((obj) => ({ ...obj, id: nanoid() }));

export type ProjectType = z.infer<typeof ProjectSchema>;
