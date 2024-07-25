import { Breadcrumbs } from "@/components/bradcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="flex flex-col items-start w-full max-w-[720px]">

            <Breadcrumbs isLoading />

            <div className="w-full flex flex-col gap-6">
                <Skeleton className="w-full h-[240px]"/>
                <Skeleton className="w-full h-[240px]"/>
                <Skeleton className="w-full h-[240px]"/>
                <Skeleton className="w-full h-[240px]"/>
                <Skeleton className="w-full h-[240px]"/>
            </div>

        </section>
    )
}