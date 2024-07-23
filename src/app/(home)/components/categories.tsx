import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
    {
        title: "Tech",
        slug: "tech"
    },
    {
        title: "Programming",
        slug: "programming"
    },
    {
        title: "Art",
        slug: "art"
    },
    {
        title: "NFTs",
        slug: "nfts"
    },
    {
        title: "Cryptocurrency",
        slug: "cryptocurrency"
    }
]

export function Categories() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-rose-500">
                Categories
            </h2>

            <div className="flex flex-wrap gap-4">
                {categories.map(({title, slug}, index) => {
                    const categoryLink = `categories/${slug}`
                    return  (
                        <Badge variant="secondary" className="hover:bg-rose-500 hover:text-white">
                            <Link href={categoryLink}>
                                {title}
                            </Link>
                        </Badge>
                    )})
                }
            </div>
        </div>
    )
}