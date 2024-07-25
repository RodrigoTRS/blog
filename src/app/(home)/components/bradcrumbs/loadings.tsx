import { ChevronRight } from "lucide-react"
import { Skeleton } from "../../../../components/ui/skeleton"

interface BreadcrumbsLoadingProps {
    hasSecondStep: boolean,
    hasThirdStep: boolean
}

export function BreadcrumbsLoading({ hasSecondStep, hasThirdStep }: BreadcrumbsLoadingProps) {
    return (
        <div className="flex w-full items-center justify-start gap-2 mb-6">
            <Skeleton className="w-12 h-12 rounded-md" />
            {hasSecondStep && (
                <>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />

                    <Skeleton className="w-24 h-12 rounded-md"/>
                </>
            )}

            {hasThirdStep && (
                <>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />

                    <Skeleton className="w-36 h-12 rounded-md"/>
                </>
            )}

        </div>
    )
}