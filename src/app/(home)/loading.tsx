import { Breadcrumbs } from "@/app/(home)/components/bradcrumbs"
import { MainPost } from "./components/main-post"
import { Sidebar } from "./components/sidebar"


export default function Loading() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col w-full items-start justify-center lg:col-span-2">
            <Breadcrumbs isLoading/>
            {/* <MainPost isLoading /> */}
          </div>

          <Sidebar isLoading />
      </section>
    )
}