import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CategoriesButtonProps {
    title: string
    isSelected: boolean
    selectionFn: (title: string) => void
}

export function CategoryButton({ title, isSelected, selectionFn }: CategoriesButtonProps) {
    return (
        <Button
            variant={isSelected ? "default": "secondary"}
            className="px-4 h-8 text-xs"
            onClick={() => selectionFn(title)}
            type="button"
        >
            { title }
        </Button>
    )
}