import { optional, z } from "zod";

export const CreateCampaignRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date().optional()
});

export const UpdateCampaignRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional()
});