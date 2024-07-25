import { fetchLatestPosts } from "@/actions/fetch-latest-posts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PageTitle } from "../components/page-title"
import { Pagination } from "@/components/pagination"
import { PostTableRow } from "../components/post-table-row"
import { PageHeader } from "../components/page-header"
import { Button } from "@/components/ui/button"

interface PostsPageProps {
    searchParams?: { 
        page: number
    }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
    const currentPage = Number(searchParams?.page ?? 1)

    const { posts, perPage, totalCount } = await fetchLatestPosts({
        page: currentPage,
        perPage: 5
    })

    return (
        <div className="flex flex-col w-full gap-8">
            <PageHeader>
                <PageTitle>Blog posts</PageTitle>
                <Button>
                    Create new post
                </Button>
            </PageHeader>

            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Title
                        </TableHead>
                        <TableHead className="flex items-center justify-end">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {posts.map((post) => {
                        return (
                            <PostTableRow post={post} key={post.id}/>
                        )
                    })}
                </TableBody>

            </Table>

            <Pagination
                basePath="/admin/posts"
                currentPage={currentPage}
                perPage={perPage}
                totalCount={totalCount}
            />
        </div>
    )
}