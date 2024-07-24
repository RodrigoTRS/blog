import { MainPost } from "./components/main-post";
import { PostCard } from "./components/post-card";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "./components/sidebar";
import { fetchLatestPosts } from "@/actions/fetch-latest-posts";

export default async function Home() {
  const posts = await fetchLatestPosts({
    page: 1, perPage: 8
  })

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col w-full items-center justify-center lg:border-r lg:col-span-2 lg:pr-12">
        <MainPost />

        <Separator className="my-6"/>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </div>

      </div>

      <Sidebar />
    </section>
  );
}
