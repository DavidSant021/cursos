import { z } from "zod";

export const CreateLeadRequestSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    status: z.enum([
        "New",
        "Contacted",
        "Qualified",
        "Converted",
        "Unresponsive",
        "Disqualified",
        "Archived"
    ]).optional()
})