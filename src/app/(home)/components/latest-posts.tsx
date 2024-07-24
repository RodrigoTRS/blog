import { fetchLatestPosts } from "@/actions/fetch-latest-posts"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"


export async function LatestPosts() {
    const latestPosts = await fetchLatestPosts({
        page: 1,
        perPage: 5
    })

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-primary">
                Latest posts
            </h2>

            <ul className="flex flex-col gap-2">
                {latestPosts.map(({title, slug}, index) => {
                    const postLink = `posts/${slug}`
                    const isLastItem = index === latestPosts.length -1

                    return  (
                        <li key={title}>
                            <Link href={postLink} className="block hover:text-primary py-2">
                                {title}
                            </Link>
                            {!isLastItem && <Separator/>}
                        </li>
                    )})
                }
            </ul>
        </div>
    )
}