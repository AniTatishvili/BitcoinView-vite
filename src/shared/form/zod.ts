import { z } from "zod";

export const validationSchema = z.object({
  username: z.string().min(1, { message: "Enter username" }).max(8),
  email: z.string().email({ message: "Email is required field" }),
  phone_number: z.string().min(1, { message: "Enter your phone number" }),
  password: z.string().min(9, "Password must be 9 characters or more"),
});

export const authorizationValidationSchema = z.object({
  username: z.string().min(1, { message: "Enter username" }),
  password: z.string().min(6, { message: "Enter your password" }),
});

export type signupSchema = z.infer<typeof validationSchema>;
