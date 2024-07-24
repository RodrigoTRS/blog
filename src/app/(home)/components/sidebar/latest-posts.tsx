import { fetchLatestPosts } from "@/actions/fetch-latest-posts"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character"
import Link from "next/link"


export async function LatestPosts() {
    const latestPosts = await fetchLatestPosts({
        page: 1,
        perPage: 5
    })

    return (
        <Card className="flex flex-col gap-6 p-6 bg-background">
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
                                {uppercaseFirstCharacter(title)}
                            </Link>
                            {!isLastItem && <Separator/>}
                        </li>
                    )})
                }
            </ul>
        </Card>
    )
}