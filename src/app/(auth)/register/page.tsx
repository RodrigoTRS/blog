import { Logo } from "@/components/logo";
import { LoginPageButton } from "../components/login-page-button";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
    title: "Register | Personal Blog",
};
  

export default async function Register() {
    return(
        <div className="flex flex-col items-start justify-between w-full h-full">
            <Logo />
            


            <LoginPageButton />
        </div>
    )
}