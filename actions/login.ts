"use server";
import { z } from "zod";
import { LoginSchema } from "@/schemas/index";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;
    try {
        await signIn("credentials", 
        { 
            email, 
            password ,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if ( error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {
                        error: "Invalid credentials",
                    };
                default:
                    return {
                        error: "Something went wrong",
                    };
            }
        };
        throw error;
    }
};

