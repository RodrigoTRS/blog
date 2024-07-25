import { Atom } from "lucide-react";

interface LogoProps {
    variant?: "icon" | "full"
}

export function Logo({ variant = "full" }: LogoProps) {
    const isFull = variant === "full"

    return (
        <span className="flex items-center justify-center gap-2 select-none">
            <Atom className="w-8 h-8 text-primary"/>
            {isFull && (
                <span className="text-2xl font-medium">
                    Personal<span className="text-primary font-bold">Blog</span>
                </span>
            )}
        </span>
    )
}