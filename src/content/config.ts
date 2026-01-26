import { defineCollection, z } from 'astro:content';

const walkthroughs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    description: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    summary: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = {
  walkthroughs,
  news,
};
