"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginFormSchema = z.object({
    email: z.string().email("You must use a valid e-mail address."),
    password: z.string().min(8, "You password must be at least 8 characters long.")
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {

    const router = useRouter()

    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    async function handleLogin({ email, password}: LoginFormData) {
        const response = await api.post("/auth/login", {
            email,
            password
        })

        if (response.status === 200) {
            router.push("/admin")
            reset()
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
        >
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    type="email"
                    id="email"
                    {...register("email")}
                />
                { errors?.email?.message && <p className="text-xs text-red-500">{errors.email.message}</p> }
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    {...register("password")}
                />
                { errors?.password?.message && <p className="text-xs text-red-500">{errors.password.message}</p> }
            </div>
            <Button
                disabled={isSubmitting}
                type="submit"
                variant="default"
            >
                Login
            </Button>
        </form>
    )
}