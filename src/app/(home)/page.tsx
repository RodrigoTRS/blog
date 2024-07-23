import { Button } from "@/components/ui/button";
import { MainPost } from "./components/main-post";
import { LatestPosts } from "./components/latest-posts";
import { Categories } from "./components/categories";

export default function Home() {
  return (
    <section className="grid grid-cols-3">
      <div className="flex flex-col col-span-2 border-r pr-12">
        <MainPost />
      </div>
      <div className="flex flex-col gap-12 pl-12">
        <LatestPosts />
        <Categories />
      </div>
    </section>
  );
}
