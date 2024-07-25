import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export function SidebarLoading() {
    return (
        <aside className="flex flex-col gap-12">
            <Card className="flex flex-col gap-6 p-6">
                <Skeleton className="w-[120px] h-[30px] rounded-md bg-primary"/>

                <div className="flex flex-col gap-4">
                    <Skeleton className="w-full h-[20px] rounded-md"/>
                    <Separator />
                    <Skeleton className="w-full h-[20px] rounded-md"/>
                    <Separator />
                    <Skeleton className="w-full h-[20px] rounded-md"/>
                    <Separator />
                    <Skeleton className="w-full h-[20px] rounded-md"/>
                    <Separator />
                    <Skeleton className="w-full h-[20px] rounded-md"/>
                </div>

            </Card>

            <div className="flex flex-col gap-6">
                <Skeleton className="w-[160px] h-[30px] rounded-md bg-primary"/>


                <div className="flex flex-wrap gap-2">
                    <Skeleton className="w-[60px] h-[15px] rounded-md"/>
                    <Skeleton className="w-[80px] h-[15px] rounded-md"/>
                    <Skeleton className="w-[40px] h-[15px] rounded-md"/>
                    <Skeleton className="w-[120px] h-[15px] rounded-md"/>
                    <Skeleton className="w-[140px] h-[15px] rounded-md"/>
                    <Skeleton className="w-[60px] h-[15px] rounded-md"/>
                </div>
            </div>
        </aside>
    )
}