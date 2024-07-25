import Link from "next/link"
import { Badge, BadgeProps } from "./ui/badge"
import { uppercaseFirstCharacter } from "@/utils/uppercase-first-character"

interface CategoryButtonProps extends BadgeProps{
    title: string,
    slug: string,
}

export function CategoryBadge(props: CategoryButtonProps) {
    return (
        <Badge {...props} className="text-white bg-primary border">
            <Link href={props.slug}>
                {uppercaseFirstCharacter(props.title)}
            </Link>
        </Badge>
    )
}