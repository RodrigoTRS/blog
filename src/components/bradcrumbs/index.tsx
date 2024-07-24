"use client"

import { ChevronRight, House } from "lucide-react"
import { Button } from "../ui/button"
import { usePathname, useRouter } from "next/navigation"
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import { title } from "process";

export function Breadcrumbs() {

    const pathname = usePathname();
    const router = useRouter()

    const pathSteps = (pathname.split("/"))

    function handleNavigate(path: string) {
        router.push(path)
    }

    const hasSecondStep = pathSteps.length > 1
    const hasThirdStep = pathSteps.length === 3


    return (
        <div className="flex w-full items-center justify-start gap-2 mb-6">
            <Button
                size="icon"
                variant="outline"
                onClick={() => handleNavigate(`/${pathSteps[0]}`)}
            >
                <House className="w-5 h-5 text-primary"/>
            </Button>
            {hasSecondStep && (
                <>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />

                    <Button
                        size="default"
                        variant="outline"
                        onClick={() => handleNavigate(`/${pathSteps[1]}`)}
                    >
                        <span>{`${uppercaseFirstCharacter(pathSteps[1])}`}</span>
                    </Button>
                </>
            )}

            {hasThirdStep && (
                <>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />

                    <Button
                        size="default"
                        variant="outline"
                        onClick={() => handleNavigate(`/${pathSteps[2]}`)}
                        disabled
                    >
                        <span>{`${document.title}`}</span>
                    </Button>
                </>
            )}

        </div>

    )
}