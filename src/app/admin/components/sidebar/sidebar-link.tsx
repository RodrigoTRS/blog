import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SidebarLinkProps {
    title: string,
    path: string,
    icon: ReactNode
}

export function SidebarLink({ title, path, icon }: SidebarLinkProps) {
    return (
        <Button
            variant="secondary"
            className="flex items-center justify-start w-full gap-8"
            asChild
        >
            <Link href={path}>
                <span className="text-primary">
                    {icon}
                </span>
                {title}
            </Link>
        </Button>
    )
}