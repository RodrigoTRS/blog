import { Breadcrumbs } from "@/app/(home)/components/bradcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="flex flex-col w-full max-w-[720px]">

            <Breadcrumbs isLoading />

            <div className="flex w-full relative">
                <div className="flex items-center justify-start gap-2 select-none absolute left-4 top-4 z-10">
                    <Skeleton className="w-20 h-6 rounded-full bg-primary"/>
                    <Skeleton className="w-24 h-6 rounded-full bg-primary"/>
                </div>

                <Skeleton className="w-full h-[180px] lg:h-[360px] rounded-md"/>
            </div>

            <div className="flex flex-col w-full mt-8 gap-4 items-start">
                <Skeleton className="w-full h-[40px] rounded-full"/>
                <Skeleton className="w-24 h-4 rounded-full bg-muted-foreground"/>
            </div>

        </section>
    )
}