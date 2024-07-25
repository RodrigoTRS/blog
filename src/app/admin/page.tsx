import { BlogPostChart } from "./components/dashboard/blog-post-chart";
import { PageTitle } from "./components/page-title";


export default async function Admin() {

  return (
    <div className="flex flex-col w-full gap-8">
      <PageTitle>Dashboard</PageTitle>

      <div className="grid grid-cols-2 gap-6 w-full">
        <BlogPostChart />
      </div>
    </div>
  );
}
