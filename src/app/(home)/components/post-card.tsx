import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PostCardProps {
    post: {
        id: string,
        title: string
        categories: {
            title: string,
            slug: string
        }[],
        content: string,
        slug: string,
        createdAt: Date,
        isMain: boolean
    }
}

export function PostCard({ post }: PostCardProps) {
    const customExcerpt = post.content.substring(0, 197) + "..."
    const postLink = `posts/${post.slug}`
    const formattedDate = new Date(post.createdAt).toDateString()

    return (
        <Card className="flex flex-col gap-2 max-w-[720px]">

            <Image
                src={MainImage}
                alt="Main Image"
                className="rounded-md relative"
            />

            <div className="flex items-center justify-start gap-2 select-none absolute mt-4 ml-4">
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

            <div className="p-6 flex flex-col gap-4">

                <Link href={postLink} className="hover:text-primary ">
                    <h4 className="text-xl font-medium leading-normal">
                        {post.title}
                    </h4>
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
                </div>
                
            </div>
        </Card>
    )
}