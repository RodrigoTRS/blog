import { Atom } from "lucide-react";

export function Logo() {
    return (
        <span className="flex items-center justify-center gap-2 select-none">
            <Atom className="w-8 h-8 text-primary"/>
            <span className="text-2xl font-medium">
                Personal<span className="text-primary font-bold">Blog</span>
            </span>
        </span>
    )
}