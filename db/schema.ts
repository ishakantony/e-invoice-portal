import { relations } from 'drizzle-orm'
import {
  date,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'

export const problems = pgTable('problems', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  name: text('name').notNull(),
})

export const problemsRelations = relations(problems, ({ many }) => ({
  resolutionStrategies: many(resolutionStrategies),
}))

export const insertProblemSchema = createInsertSchema(problems)

export const transformationStrategies = pgTable('transformation_strategies', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  name: text('name').notNull(),
})

export const insertTransformationStrategySchema = createInsertSchema(
  transformationStrategies
)

export const resolutionStrategies = pgTable('resolution_strategies', {
  id: serial('id').primaryKey(),
  code: text('code').notNull(),
  name: text('name').notNull(),
  problemId: integer('problem_id').notNull(),
})

export const resolutionStrategiesRelations = relations(
  resolutionStrategies,
  ({ one }) => ({
    problem: one(problems, {
      fields: [resolutionStrategies.problemId],
      references: [problems.id],
    }),
  })
)

export const insertResolutionStrategySchema =
  createInsertSchema(resolutionStrategies)

export const documents = pgTable('documents', {
  id: serial('id').primaryKey(),
  contentType: text('content_type').notNull(),
  content: text('content').notNull(),
})

export const insertDocumentSchema = createInsertSchema(documents)

export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  invoiceNumber: text('invoice_number').notNull().unique(),
  invoiceDate: date('invoice_date').notNull(),
  validationResult: text('validation_result').notNull(),
  latestDocumentId: numeric('latest_document_id').notNull(),
})

export const invoicesRelations = relations(invoices, ({ many }) => ({
  lifecycles: many(lifecycles),
}))

export const insertInvoiceSchema = createInsertSchema(invoices)

export const lifecycles = pgTable('lifecycles', {
  id: serial('id').primaryKey(),
  invoiceId: numeric('invoice_id').notNull(),
  lifecycle: text('lifecycle').notNull(),
  status: text('status').notNull(),
  documentId: numeric('document_id'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const lifecyclesRelations = relations(lifecycles, ({ one }) => ({
  invoice: one(invoices, {
    fields: [lifecycles.invoiceId],
    references: [invoices.id],
  }),
  transformation: one(transformations),
}))

export const insertLifecycleSchema = createInsertSchema(lifecycles)

export const transformations = pgTable('transformations', {
  id: serial('id').primaryKey(),
  fromDocumentId: numeric('from_document_id'),
  toDocumentId: numeric('to_document_id'),
  lifecycleId: numeric('lifecycle_id')
    .notNull()
    .references(() => lifecycles.id),
  transformationStrategyId: numeric('transformation_strategy_id').notNull(),
})

export const insertTransformationSchema = createInsertSchema(transformations)

export const errors = pgTable('errors', {
  id: serial('id').primaryKey(),
  status: text('status').notNull(),
  lifecycleId: numeric('lifecycle_id').notNull(),
  problemId: numeric('problem_id').notNull(),
})

export const insertErrorSchema = createInsertSchema(errors)

export const resolutions = pgTable('resolutions', {
  id: serial('id').primaryKey(),
  status: text('status').notNull(),
  fromDocumentId: numeric('from_document_id'),
  toDocumentId: numeric('to_document_id'),
  errorId: numeric('error_id').notNull(),
  resolutionStrategyId: numeric('resolution_strategy_id').notNull(),
})

export const insertResolutionSchema = createInsertSchema(resolutions)
