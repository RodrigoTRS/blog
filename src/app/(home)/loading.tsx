import { Separator } from "@/components/ui/separator"
import { MainPost } from "./components/main-post"
import { Sidebar } from "./components/sidebar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col w-full items-start justify-center lg:col-span-2">
            <Skeleton className="w-12 h-12 mb-6"/>
            <MainPost isLoading />
          </div>

          <Sidebar isLoading />
      </section>
    )
}