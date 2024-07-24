import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMainPost } from "@/actions/get-main-post";

export async function MainPost() {
    const post = await getMainPost()

    const customExcerpt = post.content.substring(0, 197) + "..."
    const postLink = `posts/${post.slug}`
    const formattedDate = new Date(post.createdAt).toDateString()

    return (
        <div className="flex flex-col gap-2 items-start max-w-[720px] relative">
            
            <div className="flex items-center justify-start gap-2 select-none absolute left-4 top-4 z-10">
                {post.categories.map((category) => {
                    return (
                        <Badge
                            variant="default"
                            key={category.title}
                        >
                            {category.title}
                        </Badge>
                    )
                })}
            </div>

            <Image
                src={MainImage}
                alt="Main Image"
                className="rounded-md mb-6 relative"
            />


            <Link href={postLink} className="hover:text-primary">
                <h3 className="text-3xl font-medium leading-normal mt-2">
                    {post.title}
                </h3>
            </Link>

            <p className="text-md text-muted-foreground">{customExcerpt}</p>

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