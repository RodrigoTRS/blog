import { fetchCategories } from "@/actions/fetch-categories"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export async function Categories() {
    const categories = await fetchCategories()

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-primary">
                Categories
            </h2>

            <div className="flex flex-wrap gap-2">
                {categories.map(({title, slug}) => {
                    const categoryLink = `categories/${slug}`

                    return  (
                        <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-white"
                            key={title}
                        >
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