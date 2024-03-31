"use client";

import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { useState } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { login } from "@/actions/login";
import { useTransition } from "react";


export const LoginForm = () => {
    const [error, setError] = useState<string| undefined>("");
    const [success, setSuccess] = useState<string| undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() =>{
            login(values)
                .then((data: any) => {
                    setSuccess(data.success);
                    setError(data.error);
                })
        });
    };
    
    return (
        <CardWrapper 
            headerLabel="Welcome back" 
            backButtonLabel="Don't have an account?" 
            backButtonHref="/auth/register" 
            showSocial={true}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                <div className="space-y-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                disabled={isPending}
                                {...field}
                                placeholder="john.hoe@example.com"
                                type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Password</FormLabel>
                            <FormControl>
                                <Input
                                disabled={isPending}
                                {...field}
                                placeholder="********"
                                type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button type="submit"
                disabled={isPending}
                className="w-full"
                >
                    Login
                </Button>
                </form>
                
        </Form>
        </CardWrapper>
    )
};

