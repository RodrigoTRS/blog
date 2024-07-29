import { Logo } from "@/components/logo";
import { RegisterPageButton } from "../components/register-page-button";
import { Metadata } from "next";
import { LoginForm } from "../components/login-form";

export const metadata: Metadata = {
    title: "Login | Personal Blog",
};

export default async function Login() {


    return(
        <div className="flex flex-col items-start justify-between w-full h-full">
            <Logo />

            <LoginForm />

            <RegisterPageButton />
        </div>
    )
}