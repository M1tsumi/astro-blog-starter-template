import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		category: z.enum(['Announcement', 'Milestone', 'Workshop', 'Update']).default('Update'),
	}),
});

export const collections = { news };
