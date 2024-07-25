"use client"

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavlinkProps extends LinkProps{
    children: ReactNode
};

export function Navlink(props: NavlinkProps) {

    const pathname = usePathname()
    const isActive = pathname === props.href

    return (
        <Link
            {...props}
            className={clsx(
                "text-foreground/80 hover:text-foreground",
                isActive && "text-primary font-bold"
            )}
        >
            {props.children}
        </Link>
    )
}