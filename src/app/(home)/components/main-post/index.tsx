import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMainPost } from "@/actions/get-main-post";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import { MainPostLoading } from "./loading";
import { HeadingImage } from "@/app/(home)/components/heading-image";

interface MainPostProps {
    isLoading?: boolean
}

export async function MainPost({ isLoading = false }: MainPostProps) {
     const post = await getMainPost()

    const customExcerpt = post.content.substring(0, 197) + "..."
    const postLink = `/posts/${post.slug}`
    const formattedDate = new Date(post.createdAt).toDateString()

    if (isLoading) {
        return (
            <MainPostLoading />
        )
    }

    return (
        <div className="flex flex-col gap-2 items-start max-w-[720px] relative">
            
           <HeadingImage categories={post.categories} />

            <Link href={postLink} className="hover:text-primary">
                <h3 className="text-3xl font-medium leading-normal mt-8">
                    {uppercaseFirstCharacter(post.title)}
                </h3>
            </Link>

            <p className="text-md text-muted-foreground">{uppercaseFirstCharacter(customExcerpt)}</p>

            <div className="flex items-center justify-between w-full mt-6">
                <div className="flex items-center gap-2">
                    <Button variant="default" asChild>
                        <Link href={postLink}>
                            Read more
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={postLink}>
                            Share
                        </Link>
                    </Button>
                </div>
                <Badge variant="outline">
                    {formattedDate}
                </Badge>
            </div>
        </div>
    )
}