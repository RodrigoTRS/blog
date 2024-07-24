import { MainPost } from "./components/main-post";
import { PostCard } from "./components/post-card";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <section className="flex flex-col gap-12 lg:grid lg:grid-cols-3">

      <div className="lg:border-r lg:col-span-2 lg:pr-12">
        <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2">
        <MainPost />
        <Separator className="lg:col-span-2 my-6"/>
        <PostCard />
        <PostCard />
        </div>
      </div>

      <Sidebar />
    </section>
  );
}
