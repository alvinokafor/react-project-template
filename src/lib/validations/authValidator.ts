import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must not be more than 32 characters" }),
});

export type LoginSchema = z.infer<typeof loginValidator>;
