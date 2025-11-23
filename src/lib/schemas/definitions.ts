import { nanoid } from "nanoid";
import z from "zod";

const colorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

const colorSchema = z.custom<`#${string}`>((val) =>
  typeof val === "string" ? colorRegex.test(val) : false
);

export const ProjectSchema = z
  .object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    imageLink: z.url(),
    previewLink: z.string(),
    colorTheme: colorSchema,
  })
  .transform((obj) => ({ ...obj, id: nanoid() }));

export type ProjectType = z.infer<typeof ProjectSchema>;
