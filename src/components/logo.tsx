import { Atom } from "lucide-react";

export function Logo() {
    return (
        <span className="flex items-center justify-center gap-2 select-none">
            <Atom className="w-8 h-8 text-rose-500"/>
            <span className="text-lg font-medium">
                Personal<span className="text-rose-500">Blog</span>
            </span>
        </span>
    )
}