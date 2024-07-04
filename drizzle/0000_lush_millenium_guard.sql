CREATE TABLE IF NOT EXISTS "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"content_type" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "errors" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text NOT NULL,
	"lifecycle_id" numeric NOT NULL,
	"problem_id" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_number" text NOT NULL,
	"invoice_date" date NOT NULL,
	"validation_result" text NOT NULL,
	"latest_document_id" numeric NOT NULL,
	CONSTRAINT "invoices_invoice_number_unique" UNIQUE("invoice_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lifecycles" (
	"id" serial PRIMARY KEY NOT NULL,
	"invoice_id" numeric NOT NULL,
	"lifecycle" text NOT NULL,
	"status" text NOT NULL,
	"document_id" numeric,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "problems" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resolution_strategies" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"name" text NOT NULL,
	"problem_id" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resolutions" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text NOT NULL,
	"from_document_id" numeric,
	"to_document_id" numeric,
	"error_id" numeric NOT NULL,
	"resolution_strategy_id" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transformation_strategies" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transformations" (
	"id" serial PRIMARY KEY NOT NULL,
	"from_document_id" numeric,
	"to_document_id" numeric,
	"lifecycle_id" numeric NOT NULL,
	"transformation_strategy_id" numeric NOT NULL
);
