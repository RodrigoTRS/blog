"use client"

import Link from "next/link";
import { Button, ButtonProps } from "../ui/button";
import { useRouter } from "next/navigation";

interface PaginationButtonProps extends ButtonProps{
    basePath: string
    navigateTo: number
}

export function PaginationButton({ basePath, navigateTo, ...props}: PaginationButtonProps) {

    const router = useRouter();

    function handleNavigate(page: number) {
        router.push(`${basePath}?page=${page}`)
    }


    return (
        <Button
            variant="outline"
            size="icon"
            {...props}
            onClick={() => {
                handleNavigate(navigateTo)
            }}
        >
                {props.children}
        </Button>
    )
}