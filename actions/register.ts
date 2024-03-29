import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }
    return {
        success: "Account created successfully"
    }
};

