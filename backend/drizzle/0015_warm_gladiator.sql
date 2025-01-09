ALTER TABLE "type_1_activities" RENAME COLUMN "goal" TO "goal_1";--> statement-breakpoint
ALTER TABLE "type_1_activities" RENAME COLUMN "reward" TO "reward_1";--> statement-breakpoint
ALTER TABLE "type_1_activities" ADD COLUMN "goal_2" integer NOT NULL DEFAULT 1;--> statement-breakpoint
ALTER TABLE "type_1_activities" ADD COLUMN "reward_2" integer DEFAULT 1;