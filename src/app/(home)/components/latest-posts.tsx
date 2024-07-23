import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const latestPost = [
    {
        title: "Lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet"
    },
    {
        title: "Dolare ipsuna siempre lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet"
    },
    {
        title: "Lorem ipsum dolor sit amet",
        slug: "lorem-ipsum-dolor-sit-amet"
    }
]

export function LatestPosts() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-rose-500">
                Latest posts
            </h2>

            <div className="flex flex-col gap-2">
                {latestPost.map(({title, slug}, index) => {
                    const postLink = `posts/${slug}`
                    const isLastItem = index === latestPost.length -1

                    return  (
                        <>
                            <Link href={postLink} className="block hover:text-rose-500">
                                {title}
                            </Link>
                            {!isLastItem && <Separator/>}
                        </>
                    )})
                }
            </div>
        </div>
    )
}