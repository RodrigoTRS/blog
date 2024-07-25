"use client"

import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


const contactFormSchema = z.object({
    email: z.string().email({ message: "You must provide a valid e-mail address."}),
    name: z.string(),
    message: z.string()
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactModal() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    function handleContactSubmit(data: ContactFormData) {
        console.log(data)
        reset()
    }

    return (
        <DialogContent className="max-w-[400px]">
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(handleContactSubmit)}
            >
                <DialogHeader>
                    <DialogTitle>Get in touch with me</DialogTitle>
                    <DialogDescription>What are we going to talk about?</DialogDescription>
                </DialogHeader>

                <Separator className="my-2"/>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="email">Your e-mail</Label>
                    <Input
                        type="text"
                        id="email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-rose-400 text-xs">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                        type="text"
                        id="name"
                        {...register("name")}
                        />
                </div>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea
                        className="resize-none h-[120px]"
                        id="message"
                        {...register("message")}
                        />
                </div>

                <DialogFooter className="mt-4">
                    <DialogTrigger asChild>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DialogTrigger>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}