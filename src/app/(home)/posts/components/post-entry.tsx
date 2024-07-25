import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"


interface PostProps {
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

interface PostEntryProps {
    post: PostProps
}

export function PostEntry({ post }: PostEntryProps) {
    const customExcerpt = post.content.substring(0, 97) + "..."
    const postLink = `posts/${post.slug}`

    return (
        <Card className="flex flex-col lg:flex-row gap-2 max-w-[720px]" >

            <div className="w-full lg:w-[300px] h-[240px]">

                <Image
                    src={MainImage}
                    width={600}
                    height={480}
                    alt="Main Image"
                    className="rounded-md w-full h-full"
                    priority
                    style={{objectFit: "cover", aspectRatio: 1}}
                />
            </div>

            <div className="w-full flex flex-col justify-between p-6">
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