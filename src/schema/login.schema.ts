import * as z from "zod";

export const loginSchema = z
    .object({
        email: z.string().email("Invalid Email"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must not exceed 20 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[@$+=!%*?&#]/, "Password must contain at least one special character (@$!%*?&#)"),
        })
        



export type LoginSchemaType =z.infer<typeof loginSchema>