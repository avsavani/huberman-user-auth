"use server";
import { z } from "zod";
import { LoginSchema } from "@/schemas/index";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    return {
        success: "Success! email sent",
    };
};

