import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import { PostResponse } from "@/actions/fetch-latest-posts"


interface TableRowProps {
    post: PostResponse
}

export function PostTableRow({ post }: TableRowProps) {
    return (
        <TableRow>
            <TableCell>{ post.title }</TableCell>
            <TableCell
                className="flex items-center justify-end gap-2"
                >
                <Button
                    variant="outline"
                    size="icon"
                    >
                    <Pencil
                        className="w-5 h-5"
                        />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    >
                    <Trash
                        className="w-5 h-5"
                        />
                </Button>
            </TableCell>
        </TableRow>
    )
}