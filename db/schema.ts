import { pgTable, text } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'

export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull().unique(),
})

export const insertIndustrySchema = createInsertSchema(posts)
