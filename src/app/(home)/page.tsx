import { Button } from "@/components/ui/button";
import { MainPost } from "./components/main-post";
import { LatestPosts } from "./components/latest-posts";
import { Categories } from "./components/categories";
import { PostCard } from "./components/post-card";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <section className="grid grid-cols-3">
      <div className="flex flex-col border-r col-span-2 pr-12">
        <div className="grid grid-cols-2 gap-6">
        <MainPost />
        <Separator className="col-span-2 my-6"/>
        <PostCard />
        <PostCard />
        </div>
      </div>
      <Sidebar />
    </section>
  );
}
