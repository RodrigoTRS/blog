import { Skeleton } from "@/components/ui/skeleton";

export function MainPostLoading() {
    return (
        <div className="flex flex-col gap-2 items-start w-full max-w-[720px] relative">
            
            <div className="flex items-center justify-start gap-2 select-none absolute left-4 top-4 z-10">
                <Skeleton className="w-20 h-6 rounded-full bg-primary"/>
                <Skeleton className="w-24 h-6 rounded-full bg-primary"/>
            </div>

            <Skeleton className="w-full h-[180px] lg:h-[360px] rounded-md"/>

            <Skeleton className="w-full h-[40px] rounded-md mt-8"/>

            <div className="flex w-full flex-col gap-2">
                <Skeleton className="w-full h-[20px] rounded-md"/>
                <Skeleton className="w-full h-[20px] rounded-md"/>
                <Skeleton className="w-[120px] h-[20px] rounded-md"/>
            </div>


            <div className="flex items-center justify-between w-full mt-6">
                <div className="flex items-center gap-2">
                    <Skeleton className="w-[120px] h-[40px] rounded-md bg-primary"/>
                    <Skeleton className="w-[80px] h-[40px] rounded-md"/>
                </div>
                <Skeleton className="w-[120px] h-[20px] rounded-md"/>
            </div>
        </div>
    )
}