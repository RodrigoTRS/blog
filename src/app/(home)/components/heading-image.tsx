import Image from "next/image";
import MainImage from "@/../public/main-blog.jpg"
import { CategoryBadge } from "../../../components/category-badge";
import { Category } from "@/models/Category";


interface HeadingImageProps {
    categories: Category[],
}

export function HeadingImage({ categories }: HeadingImageProps) {
    return (
        <div className="relative h-full">
            <div className="flex items-center justify-center gap-2 select-none absolute left-4 top-4 z-10">
                {(categories.map(({ title, slug}) => {
                    return (
                        <CategoryBadge
                            key={slug}
                            title={title}
                            slug={slug}
                        />
                    )
                }))
            }
            </div>

            <Image
                src={MainImage}
                width={720}
                height={360}
                alt="Main Image"
                className="rounded-md w-full h-full"
                priority
            />
        </div>
    )
}