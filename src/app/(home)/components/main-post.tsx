import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const post = {
    slug: "/lorem-ipsum-dolor-sit-amet",
    categories: ["Tech", "Programming"],
    title: "Lorem ipsum dolor sit amet is simply dummy text of the printing",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    createdAt: new Date()
}

export function MainPost() {
    const customExcerpt = post.excerpt.substring(0, 197) + "..."
    const postLink = `posts/${post.slug}`
    const formattedDate = post.createdAt.toDateString()

    return (
        <div className="flex flex-col gap-2 col-span-2 items-center max-w-[720px] relative">

            <div className="flex items-center justify-start gap-2 select-none absolute left-4 top-4 z-10">
                {post.categories.map((category) => {
                    return (
                        <Badge variant="default" key={category}>
                            {category}
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