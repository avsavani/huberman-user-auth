"use client";

import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { resolve } from "path";
import { Resolver } from "dns";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";


export const RegisterForm = () => {
    const [error, setError] = useState<string| undefined>("");
    const [success, setSuccess] = useState<string| undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() =>{
            register(values)
                .then((data: any) => {
                    setSuccess(data.success);
                    setError(data.error);
                })
        });
    };
    
    return (
        <CardWrapper 
            headerLabel="Create an account" 
            backButtonLabel="Already have an account?" 
            backButtonHref="/auth/login" 
            showSocial={true}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                    disabled={isPending}
                                    {...field}
                                    placeholder="John Hoe"
                                    type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    Register
                </Button>
                </form>
                
        </Form>
        </CardWrapper>
    )
};

