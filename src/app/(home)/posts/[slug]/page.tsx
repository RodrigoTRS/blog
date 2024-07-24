import { getPostBySlug } from "@/actions/get-post-by-slug"
import { Badge } from "@/components/ui/badge";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { CategoryBadge } from "@/components/category-badge";
import { HeadingImage } from "@/components/heading-image";
import { BackToHomepageButton } from "../components/back-to-homepage-button";

interface PostPageProps {
    params: {
        slug: string
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const postSlug = params.slug

    const post = await getPostBySlug({
        slug: postSlug
    })

    const formattedDate = new Date(post.createdAt).toDateString()

    return (
        <section className="flex flex-col items-start w-full max-w-[720px]">

            <BackToHomepageButton />

            <HeadingImage categories={post.categories} />

            <div className="flex flex-col mt-8 gap-2 items-start">
                <h1 className="text-3xl font-medium leading-normal">
                    {uppercaseFirstCharacter(post.title)}
                </h1>

                <Badge variant="outline">{formattedDate}</Badge>
            </div>

            <Separator className="w-full my-6"/>

            <p className="text-md text-muted-foreground block">{uppercaseFirstCharacter(post.content)}</p>


        </section>
    )
}