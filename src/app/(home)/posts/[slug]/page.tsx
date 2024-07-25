import { getPostBySlug } from "@/actions/get-post-by-slug"
import { Badge } from "@/components/ui/badge";
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character";
import { Separator } from "@/components/ui/separator";
import { HeadingImage } from "@/app/(home)/components/heading-image";
import { Breadcrumbs } from "@/app/(home)/components/bradcrumbs";
import { Metadata } from "next";

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

            <Breadcrumbs />

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