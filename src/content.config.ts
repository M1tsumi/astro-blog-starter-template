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

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		author: z.string().default('Future Voters Academy'),
		category: z.enum(['Voter Guide', 'Civic Education', 'How-To', 'State Guide', 'Resources']).default('Civic Education'),
	}),
});

export const collections = { news, blog };
