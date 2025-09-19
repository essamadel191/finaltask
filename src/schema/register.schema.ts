import * as z from "zod";

export const registerSchema = z
    .object({
        name: z.string().min(4, "Min Length 4").max(20, "Max Length 20"),
        email: z.string().email("Invalid Email"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must not exceed 20 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[@$+=!%*?&#]/, "Password must contain at least one special character (@$!%*?&#)"),
        rePassword: z.string().min(6, "Re-enter your password"),
        phone: z
            .string()
            .regex(/^01[0125][0-9]{8}$/, "Phone must be a valid Egyptian number"),
        })
        .refine(function (object){
            if(object.password === object.rePassword){
                return true
            }
            return false
        },
            {
                error: "Passwords don't match",
                path: ["rePassword"],
            }
        );



export type registerSchemaType =z.infer<typeof registerSchema>