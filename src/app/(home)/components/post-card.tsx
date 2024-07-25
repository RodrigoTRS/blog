import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import { HeadingImage } from "@/app/(home)/components/heading-image";
import { Post } from "@/models/Post";

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    const customExcerpt = post.content.substring(0, 97) + "..."
    const postLink = `posts/${post.slug}`

    return (
        <Card className="flex flex-col gap-2 max-w-[720px]" >

            <HeadingImage
                categories={post.categories}
            />

            <div className="w-full flex flex-col justify-between p-6 min-h-[260px]">
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