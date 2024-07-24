import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";

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
    },
    index: number
}

export function PostCard({ post, index }: PostCardProps) {
    const customExcerpt = post.content.substring(0, 97) + "..."
    const postLink = `posts/${post.slug}`
    const formattedDate = new Date(post.createdAt).toDateString()

    return (
        <Card className="flex flex-col gap-2 max-w-[720px]">

            <Image
                src={MainImage}
                alt="Main Image"
                className="rounded-md relative"
                priority={index < 3}
            />

            <div className="flex items-center justify-start gap-2 select-none absolute mt-4 ml-4">
                {post.categories.map((category) => {
                    return (
                        <Badge
                            variant="default"
                            key={category.title}
                        >
                            {uppercaseFirstCharacter(category.title)}
                        </Badge>
                    )
                })}
            </div>

            <div className="flex flex-col justify-between p-6 min-h-[260px]">
                <div className="flex flex-col gap-2">
                    <Link href={postLink} className="hover:text-primary ">
                        <h4 className="text-xl font-medium leading-normal">
                            {uppercaseFirstCharacter(post.title)}
                        </h4>
                    </Link>

                    <p className="text-md text-muted-foreground">{uppercaseFirstCharacter(customExcerpt)}</p>
                </div>

                <div className="flex items-center w-full">
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